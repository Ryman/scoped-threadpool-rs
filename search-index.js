var searchIndex = {};
searchIndex['scoped_threadpool'] = {"items":[[0,"","scoped_threadpool","This crate provides a stable, safe and scoped threadpool.",null,null],[3,"Pool","","A threadpool that acts as a handle to a number\nof threads spawned at construction.",null,null],[3,"Scope","","Handle to the scope during which the threadpool is borrowed.",null,null],[11,"drop","","",0,{"inputs":[{"name":"pool"}],"output":null}],[11,"new","","Construct a threadpool with the given number of threads.\nMinimum value is `1`.",0,{"inputs":[{"name":"pool"},{"name":"u32"}],"output":{"name":"pool"}}],[11,"scoped","","Borrows the pool and allows executing jobs on other\nthreads during that scope via the argument of the closure.",0,{"inputs":[{"name":"pool"},{"name":"f"}],"output":{"name":"r"}}],[11,"thread_count","","Returns the number of threads inside this pool.",0,{"inputs":[{"name":"pool"}],"output":{"name":"u32"}}],[11,"execute","","Execute a job on the threadpool.",1,{"inputs":[{"name":"scope"},{"name":"f"}],"output":null}],[11,"drop","","",1,{"inputs":[{"name":"scope"}],"output":null}]],"paths":[[3,"Pool"],[3,"Scope"]]};
initSearch(searchIndex);
