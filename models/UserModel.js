//User Schemas ============================================================================================

module.exports = function(mongoose)
{
    var userSchema = new mongoose.Schema(
        {
            email: String,
            pass: String,
            name: String
        });

    var User = mongoose.model('swtk_accts', userSchema);//Sets model to 'swtk_accts' collection

    return User;
}