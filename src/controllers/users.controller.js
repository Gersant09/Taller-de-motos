exports.getUsers =  (req, res)=>{
    const time = req.requestTime
    res.json({
        requestTime: time,
        message: ' Hello from GET repair shop GS 🛵'
    })
}

exports.UpdateUsers = (req, res)=>{
    console.log(req.body)
    const time = req.requestTime
    res.json({
        requestTime: time,
        message: ' Hello from POST repair shop GS 🛵',
        product: req.body
    })
}

exports.getUser = (req, res)=>{
    const id = req.params.id
    const time = req.requestTime
    res.json({
        requestTime: time,
        message: ' Hello from GETONE repair shop GS 🛵',
        id,
    })
}

exports.createUsers = (req, res)=>{
    const id = req.params.id
    const time = req.requestTime
    res.status(201).json({
        requestTime: time,
        message: ' Hello from PATCH repair shop GS 🛵',
        id,
    })
}

exports.deleteUsers = (req, res)=>{
    const id = req.params.id
    const time = req.requestTime
    res.json({
        requestTime: time,
        message: ' Hello from DELETE repair shop GS 🛵',
        id,
    })
}