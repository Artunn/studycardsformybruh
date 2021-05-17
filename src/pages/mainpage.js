import React, { useState, useRef, useEffect } from 'react';
import { Card, Input, Form, Button, Drawer, Checkbox } from 'antd';
import './mainpage.css'
import xlsxfile from 'read-excel-file'
import fs from 'fs'
const { Search } = Input;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

function QuestionPage() {
    const input = document.getElementById('input')

    const inputRef = useRef(null)
    const [questionList, setQuestionList] = useState([
        { question: "lütfen soru yükle", answer: "aslabilemezsin", available: true }])

    const [questionIndex, setQuestionIndex] = useState(0)

    const [validationIndex, setValidationIndex] = useState(0)
    const [formInput, setFormInput] = useState("")

    const validationArray = ["", "success", "error"]

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onChange(checkedValues) {
        setQuestionList(questionList.map(val => {
            if (val.question === checkedValues.target.value)
                val.available = checkedValues.target.checked
            return val
        })) 
    }

    function checkboxGenerate() {
        return questionList.map(inputval => {
            return <><Checkbox
                onChange={onChange}
                value={inputval.question}
                checked={inputval.available}>{inputval.question}
            </Checkbox><br /></>
        })
    }

    const changeHandler = (event) => {
        xlsxfile(event.target.files[0]).then((rows) => {
            setQuestionList(rows.map(row=>{return {question: row[0], answer: row[1], available: true }}))
        })
    }

    const [checkboxes, setCheckboxes] = useState(checkboxGenerate())

    useEffect(() => {
        setCheckboxes(checkboxGenerate())
    }, [questionList])

    const clickedContinue = (value) => {
        const answer = inputRef.current.input.value;
        // console.log(answer)
        if (questionList[questionIndex].answer.toLowerCase() === answer.toLowerCase()) {
            setValidationIndex(1)
            setTimeout(() => {
                let newQuestionIndex = questionIndex;
                do {
                    newQuestionIndex = (newQuestionIndex + 1) % questionList.length;
                } while (!(questionList[newQuestionIndex].available))
                setQuestionIndex((newQuestionIndex) % questionList.length)
                // console.log(questionList[newQuestionIndex])
                setFormInput("");
            }, 1000)
        } else {
            setValidationIndex(2)
            // console.log(questionList[questionIndex].answer.toLowerCase(), answer.toLowerCase)
        }
        setTimeout(() => {
            setValidationIndex(0)
        }, 1000)
    }

    return (
        <div className="mainpage">
            <Button style={{ margin: '20px' }} type="primary" onClick={showDrawer}>
                Soru ekle / düzenle
      </Button>
            <Drawer
                title="Edit Questions"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {checkboxes}
                <input style={{margin:'20px'}} type="file" id="input" onChange={changeHandler}/>
            </Drawer>
            <Card title={questionList[questionIndex].question} className="cardstyling">
                <Form>
                    <Form.Item label="Cevap" hasFeedback validateStatus={validationArray[validationIndex]}>
                        <Input onKeyPress={e => e.key === 'Enter' ? clickedContinue() : null} value={formInput} onChange={(e) => { setFormInput(e.target.value) }} ref={inputRef} placeholder="Cevabını buraya" id="success" />
                    </Form.Item>
                    <Form.Item {...formItemLayout}>
                        <Button type="primary" onClick={clickedContinue} onKeyPress={e => e.key === 'Enter' ? clickedContinue() : null}>
                            Kontrol et
                    </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default QuestionPage;