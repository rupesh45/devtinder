advance routing

/ab?c -> ac,abc -> b optional
/ab*cd -> add anything b and c
/ab+c -> abbbbc
/a(bc)?c -> bc is optional
/a/ => regex
dynamic routing

app.use('/route',(req,res,next) => {
    
})
app.use('/route',rh1,rh2,[rh3,rh4],rh5) -> it has to send response or itll hang