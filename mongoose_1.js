const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/db1").
    then(() => {
        console.log("connection created");
    }).catch((err) => {
        console.log(err)
    });

const Db1Schema = new mongoose.Schema({
    name: {
        type : String,
        uppercase : true
    },
    age: {
        type : Number,
        validate(value){
            if(value<0){
                throw new Error("age should be a positive number");
            }
        }
    },
    gender: String,
    active: Boolean,
});

const dbCollection = new mongoose.model("dbCollection", Db1Schema);

//------------------- insert a single document in collection ----------------

const createDocument = async()=>{
    try{
        const data1 = new dbCollection({
            name: "meet",
            age: 20,
            gender: "male",
            active: true,
        });

        const result = await data1.save();
        console.log(result);

    }catch(err){
        console.log(err);
    }
}
createDocument();


//----------------- insert multiple documents in collection ---------------------------

// const createDocument = async()=>{
//         try{
//             const data2 = new dbCollection({
//                 name: "krushang",
//                 age: 20,
//                 gender: "male",
//                 active: true,
//             });
//             const data3 = new dbCollection({
//                 name: "jankit",
//                 age: 22,
//                 gender: "female",
//                 active: true,
//             });
//             const data4 = new dbCollection({
//                 name: "sandip",
//                 age: 21,
//                 gender: "not found",
//                 active: true,
//             });
//             const data5 = new dbCollection({
//                 name: "sahil",
//                 age: 19 ,
//                 gender: "male",
//                 active: true,
//             });
//             const data6 = new dbCollection({
//                 name: "krishna",
//                 age: 5,
//                 gender: "male",
//                 active: true,
//             });

//             const result = await dbCollection.insertMany([data2,data3,data4,data5,data6]);
//             console.log(result);

//         }catch(err){
//             console.log(err);
//         }
//     }
//     createDocument();


// ---------------to get data from db / find ------------------

const getData = async () => {
    try {
        // const read = await dbCollection.find({ age: { $gte: 20 } });
        // const read = await dbCollection.find().countDocuments();
        const read = await dbCollection.find().sort({ age: 1 });
        // console.log(read);
    }
    catch (err) {
        console.log(err);
    }
};
getData();


//------------------ update data of a document---------------------------

const updateData = async (id) => {
    try {

        const update = await dbCollection.findByIdAndUpdate({ _id: id }, 
            { $set: { name: "Maan" } },
            {new : true});
        // const update = await dbCollection.updateOne({_id : "6450f1be7844b016371e779c" }, 
        // {$set :{name : "man"}});
        console.log(update);
    }
    catch (err) {
        console.log(err);
    }
}

// updateData("6450f1be7844b016371e779c");


//---------------- delete document -------------------

const deleteData = async (_id) => {
    try {

        const deleteDoc = await dbCollection.findByIdAndDelete({ _id }); 
        
        // const update = await dbCollection.updateOne({_id : "6450f1be7844b016371e779c" }, 
        // {$set :{name : "man"}});
        console.log(deleteDoc);
    }
    catch (err) {
        console.log(err);
    }
}

// deleteData("6450f1be7844b016371e779c")
