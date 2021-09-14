class Session {
    constructor(user) {
        this.profile = user
    }
    get name() {
        return this.profile.name
    }
    get email() {
        return this.profile.email
    }
    get imageUrl() {
        return this.profile.imageUrl
    }
    create() {
        console.log(this)
    }
    static destroy() {
        console.log('Signed Out!')
    }
}