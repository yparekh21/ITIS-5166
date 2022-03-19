const {ObjectId} = require('mongodb');

//need a reference variable to the stories collection in mongodb
let stories;
exports.getCollection = db=>{
    stories = db.collection('stories')
}
exports.find = function(){
    return stories.find().toArray();
}

exports.findById = function(id){
    return stories.findOne({_id: ObjectId(id)})
};

exports.save = story => stories.insertOne(story);

exports.updateById = (id, newStory) => stories.updateOne({_id: ObjectId(id)},
                    {$set:{title: newStory.title, content: newStory.content}});
                   
exports.deleteById = (id) => stories.deleteOne({_id: ObjectId(id)});