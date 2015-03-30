
var myDB;
function initDB(){
	var databaseName =  "media";
	var databaseVersion = "1.0";
	var databaseDisplayName = "MediaPembelajaran";
	var databaseSize =  5 * 1024 * 1024;
	
	console.log("start initdb"); 
	//Accessing with HTML5 local database
	//myDB = window.openDatabase(databaseName, databaseVersion , databaseDisplayName, databaseSize);	
    //myDB = window.sqlitePlugin.openDatabase({name : databaseName,location:1});
    //var db = window.sqlitePlugin.openDatabase("media", "1.0", "Demo", -1);
    myDB = window.openDatabase("media.db", "1.0", "Demo", databaseSize);
    
    console.log("after initdb");

}

function CreateProfileTable() {
	myDB.transaction(function(tx) {
        //transaction.executeSql('DROP TABLE IF EXISTS profil');

    	tx.executeSql('CREATE ' +
                   'TABLE IF NOT EXISTS ' +
                   'profil (id integer primary key, nama text, materi1 text, materi2 text, materi3 text, materi4 text)', [],
            function(tx, result) {
                console.log("tabel profil dibuat");
            }, 
            function(error) {
                  console.log("Error occurred while creating the table.");
            });
        });

}

var GetProfilData=function() {
    var materi1=0,materi2=0,materi3=0,materi4=0,nama="";

	myDB.transaction(function(tx) {
    	tx.executeSql("SELECT * FROM profil",[],
        function(tx, result) {
            var dataLength = result.rows.length;
            console.log(dataLength);
            if(dataLength  > 0){
                nama = result.rows.item(0).nama;
                materi1 = result.rows.item(0).materi1;
                materi2 = result.rows.item(0).materi2;
                materi3 = result.rows.item(0).materi3;
                materi4 = result.rows.item(0).materi4;
                ambilData(nama,materi1,materi2,materi3,materi4);
            }else{
            	console.log("No profile found having this profile id."); 
            }

        }, 
		function(error) {
		    console.log("Error occurred while getting the data.");
		});
    }); 
}

function UpdateBusinssTable(){
    myDB.transaction(function(tx) {
        // Define update query
        var executeQuery = "UPDATE " +
                           "Business_Table " +
                           "SET business_name = ?  WHERE  business_id =?"; 

        tx.executeSql(executeQuery, ['Mindfire Solutions', '1234'],
        function(tx, result) {   // On success
                 console.log('Business updated successfully.');
        },
        function(error){     //On error
            console.log('Error occurred while updating the business.'); 
        });
    });
}

function UpdateScore(materi,skor){
    myDB.transaction(function(tx) {
        // Define update query
        var executeQuery = "UPDATE " +
                           "profil " +
                           "SET "+materi+" = ?  WHERE  id = ?"; 

        tx.executeSql(executeQuery, [skor, '1'],
        function(tx, result) {   // On success
                 console.log('Profil updated successfully.');
        },
        function(error){     //On error
            console.log('Error occurred while updating the business.'); 
        });
    });
}

function DeleteProfileTable(){
    myDB.transaction(function(tx) {
        // Define delete query
        var executeQuery = "DELETE FROM profil";
        tx.executeSql(executeQuery, [],
        function(tx, result) {   // On success
                 console.log('All profile data deleted successfully.');
        },
        function(error){     //On error                              
            console.log('Error occurred while deleting the profile data.'); 
        });
    });
}

function DropBusinessTable(){
    myDB.transaction(function(tx) {
        // Define delete query
        var executeQuery = "DROP TABLE  IF EXISTS Business_Table";
        tx.executeSql(executeQuery, [],
            function(tx, result) {   // On success
                 console.log('Table deleted successfully.');
            },
            function(error){     //On error                              
                 console.log('Error occurred while droping the table.'); 
            }
        );
    });
}