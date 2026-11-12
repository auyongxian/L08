import React, {useState} from 'react';
import {View, Text, Button, Alert, ScrollView, Image, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component QuizQuestion with the image box
const QuizQuestion = ({ questionNumber, prompt, selectedValue, onValueChange, options, imageSource }) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{questionNumber}. {prompt}</Text>

            <View style={styles.imageBox}>
                <Image source={imageSource} style={styles.image} resizeMode="contain" />
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                >
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    const [q1, setQ1] = useState("Select an answer");
    const [q2, setQ2] = useState("Select an answer");
    const [q3, setQ3] = useState("Select an answer");
    const [q4, setQ4] = useState("Select an answer");
    const [q5, setQ5] = useState("Select an answer");
    const [q6, setQ6] = useState("Select an answer");

    const correctAnswers = {
        q1: "Lebron James",
        q2: "Stephen Curry",
        q3: "Kawhi Leonard",
        q4: "Paul George",
        q5: "Jaylen Brown",
        q6: "Philadelphia 76ers",
    };

    const score = () => {
        let currentScore = 0;
        if (q1 === correctAnswers.q1) currentScore++;
        if (q2 === correctAnswers.q2) currentScore++;
        if (q3 === correctAnswers.q3) currentScore++;
        if (q4 === correctAnswers.q4) currentScore++;
        if (q5 === correctAnswers.q5) currentScore++;
        if (q6 === correctAnswers.q6) currentScore++;

        let feedback = "";
        if (currentScore === 6) {
            feedback = `Outstanding! You got ${currentScore} out of 6 correct. Absolute basketball expert!`;
        } else if (currentScore >= 3) {
            feedback = `Well done! You got ${currentScore} out of 6 correct.`;
        } else {
            feedback = `You got ${currentScore} out of 6 correct. You can do better next time!`;
        }

        Alert.alert("Quiz Results", feedback);
    }

    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.title}>
                NBA Basketball Quiz
            </Text>

            <QuizQuestion
                questionNumber="1"
                prompt="Which player holds the record for the most NBA points?"
                selectedValue={q1}
                onValueChange={(itemValue) => setQ1(itemValue)}
                options={["Select an answer", "Kareem Abdul-Jabbar", "Lebron James", "Michael Jordan", "Magic Johnson"]}
                imageSource={require('./assets/lebron.png')}
            />

            <QuizQuestion
                questionNumber="2"
                prompt="Which player holds the record for the most NBA 3 points scored?"
                selectedValue={q2}
                onValueChange={(itemValue) => setQ2(itemValue)}
                options={["Select an answer", "Stephen Curry", "Damian Lillard", "Klay Thompson", "Steve Kerr"]}
                imageSource={require('./assets/curry.png')}
            />

            <QuizQuestion
                questionNumber="3"
                prompt="Which player hit the only game winner buzzer beater in a game 7 of the post season?"
                selectedValue={q3}
                onValueChange={(itemValue) => setQ3(itemValue)}
                options={["Select an answer", "Kawhi Leonard", "Damian Lillard", "Michael Jordan", "Kobe Bryant"]}
                imageSource={require('./assets/kawhi.png')}
            />

            <QuizQuestion
                questionNumber="4"
                prompt="Which player was traded for the most first round picks?"
                selectedValue={q4}
                onValueChange={(itemValue) => setQ4(itemValue)}
                options={["Select an answer", "Paul George", "Rudy Gobert", "Anthony Davis", "Kevin Durant"]}
                imageSource={require('./assets/paul george.png')}
            />

            <QuizQuestion
                questionNumber="5"
                prompt="Which player is the 2024 finals mvp?"
                selectedValue={q5}
                onValueChange={(itemValue) => setQ5(itemValue)}
                options={["Select an answer", "Jaylen Brown", "Jayson Tatum", "Luka Doncic", "Nikola Jokic"]}
                imageSource={require('./assets/jaylen.png')}
            />

            <QuizQuestion
                questionNumber="6"
                prompt="What team is this?"
                selectedValue={q6}
                onValueChange={(itemValue) => setQ6(itemValue)}
                options={["Select an answer", "Philadelphia 76ers", "Boston Celtics", "New York Knicks", "Brooklyn Nets"]}
                imageSource={require('./assets/philly.png')}
            />

            <Button title="Submit Quiz" onPress={score} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Container: {
        margin: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    questionContainer: {
        marginBottom: 30,
        borderRadius: 8,
    },
    questionText: {
        fontSize: 20,
        marginBottom: 20,
    },
    imageBox: {
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 8,
    },
});

export default MyApp;