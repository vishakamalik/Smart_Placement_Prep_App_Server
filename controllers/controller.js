import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions from "../database/data.js";

/** get all questions */
export async function getQuestions(req, res) {
  try {
    const allQuestions = await Questions.find({});
    const allSortedQuestions = allQuestions[0].questions.filter(
      (item) => item.testcode === req.query.c
    );

    // Shuffle and select 10 random questions
    const randomQ = allSortedQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    // const randomQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

    // console.log(randomQ);
    res.json([{ questions: randomQ }, { answers: [] }]);
    // res.json(randomQuestions);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions }, function (err, data) {
      res.json({ msg: "Data Saved Successfully...!" });
    });
  } catch (error) {
    res.json({ error });
  }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

/** get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
