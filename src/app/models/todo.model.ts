export default class TodoModel {
  public _id?: string=null
  constructor (
        public txt: string='',
        public image: string=null,
        public isActive: boolean=true,
    ) {}

    public setId?(){
      this._id = this._makeId();
    }

    public setImage?(img) {
      this.image=img
    }
  
    private _makeId?(length = 10) {
      let txt = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return txt
    }
}