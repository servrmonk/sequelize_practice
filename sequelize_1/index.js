const { sequelize, Profile, User } = require("./models");

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database Synced ");

    // creating a suer
    const user = await User.create({ name: "Mr Big Daddy " });

    // create a profile and associate it with the user
    const profile = await Profile.create({ bio: "BusinessMan Private Equity",userId:user.id });

    // fetch and display the user along with their profile
    const fetchedUser = await User.findOne({
      where: { id: user.id },
      include: { model: Profile, as: "profile" },
    });
    console.log("FetchedUser.toJson() ======================================================================================>", fetchedUser.toJSON());
    
  } catch (err) {
    console.log("error in catch===============================> ", err);
  } finally {
    await sequelize.close();
  }
};

main()