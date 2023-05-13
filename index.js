function stringSplit (str) {
    if (typeof (str) == 'string') {
        if (str.length > 140) {
            const iter = Math.ceil(str.length / 136)
            if (iter <= 9999) {
                const data = []
                let checkEnd = true
                let index = 0
                while (checkEnd) {
                    const result = str.slice(0, str.length > 136 ? 136 - index : str.length - index)
                    const testString = str.slice(str.length > 136 ? 136 - index : str.length - index, (str.length > 136 ? 136 - index : str.length - index) + 136)
                    index++
                    const char = str.length > 136 ? 136 - index : str.length - index


                    if (testString[0] == ' ' || result[char] == ' ' || str == result) {
                        str = str.replace(result, '')
                        data.push(result.trim() + ` ${data.length + 1}/${iter}`)
                        index = 0
                    }
                    if (iter == data.length) {
                        checkEnd = false
                    }
                }
                return data
            } else {
                return "String exceeds 9999 elements in array"
            }
        } else {
            return str.split(' ')
        }
    } else {
        return 'Not String'
    }
}



const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuser magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'

console.log(stringSplit(text));
