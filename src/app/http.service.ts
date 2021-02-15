import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class HttpService  {
    constructor(){}

    myMethod(){
        return(console.log('Hey, the service is working!'))
    }
}