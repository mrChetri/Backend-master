# Post Controller - Learning Notes

## Lesson 1: Optional Chaining Operator (`?.`) and Code Simplification
`const author = req.user?._id || req.user?.id;`

## Lesson 2: Standardized API Response Format & `data: post`
`res.status(201).json({ success: true, message: "Post created successfully", data: post });`

## Lesson 3: Why Catch Block Triggers Instead of `if (!title || !content)` Check
Destructuring `req.body` when `undefined` causes a JavaScript runtime error.

## Lesson 4: Fetching All Posts with Author Name populated (`.populate()`)
`Post.find().populate("author", "username email");`
