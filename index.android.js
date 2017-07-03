import React, {Component} from 'react';
import{AppRegistry, ScrollView, Image, Text, View, FlatList,SectionList, StyleSheet,} from 'react-native'

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, flexDirection: "column"}}>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        );
    }
}


//
// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

//  class FlatListBasics extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                     <FlatList
//                         data={[
//                             {key: 'Devin'},
//                             {key: 'Jackson'},
//                             {key: 'James'},
//                             {key: 'Joel'},
//                             {key: 'John'},
//                             {key: 'Jillian'},
//                             {key: 'Jimmy'},
//                             {key: 'Julie'},
//                             {key: 'Devin1'},
//                             {key: 'Jackson1'},
//                             {key: 'James1'},
//                             {key: 'Joel1'},
//                             {key: 'John1'},
//                             {key: 'Jillian1'},
//                             {key: 'Jimmy1'},
//                             {key: 'Julie1'},
//                             {key: 'Devin2'},
//                             {key: 'Jackson2'},
//                             {key: 'James2'},
//                             {key: 'Joel2'},
//                             {key: 'John2'},
//                             {key: 'Jillian2'},
//                             {key: 'Jimmy2'},
//                             {key: 'Julie2'},
//                         ]}
//                         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//                     />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })



class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <SectionList
                        sections={[
                            {title: 'D', data: ['Devin']},
                            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    />
            </View>
        );
    }


    // 注意这个方法前面有async关键字
    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            return responseJson.movies;
        } catch(error) {
            console.error(error);
        }
    }

}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})





AppRegistry.registerComponent('xuliangPro', () => SectionListBasics);

// AppRegistry.registerComponent(
//     'IScrolledDownAndWhatHappenedNextShockedMe',
//     () => IScrolledDownAndWhatHappenedNextShockedMe);