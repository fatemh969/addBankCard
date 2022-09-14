import React, { Children, ReactElement, ReactNode, useState } from "react";
import { banks } from "./DetectBank";
import { Button, Modal } from 'antd';

const AddBankCard = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState('');
    const [valueShaba, setValueShaba] = useState('');
    const [nameBank, setNameBank] = useState<string>('');
    const [imgBank, setImgBank] = useState('');
    const [erorr, setErorr] = useState<string>("");

    const handleChange = (e: any) => {
        const result = e.target.value.replace(/\D/g, '');
        const eventin = result.slice(0, 6);
        
        banks.filter((index) => {
            if (+eventin == index.card_no) {
                setNameBank(index.bank_title)
                setImgBank(index.bank_logo)
            }else if(e.target.value.length >= 6 && +eventin !== index.card_no){
                setErorr("شماره کارت اشتباه است2222")
            }else if(e.target.value.length < 5 && eventin == "" ){
                setNameBank("")
                setImgBank("")
                setErorr("")
            }

        })

        setValue(result);

    };

    const handleChangeShaba = (e: any) => {
        const result = e.target.value.replace(/\D/g, '');

        setValueShaba(result);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if(value === ""){
            setErorr("شماره کارت را وارد نماید")
        }else if(nameBank === "" && imgBank === ""){
            console.log("khali")
            setErorr("شماره کارت اشتباه است")
        }else{
            setIsModalOpen(false);
        }
   
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    

    return (
        <>

            <div className="col-container">
                <div className="col">
                    <div className="col-center">
                        <button onClick={showModal}>افزودن حساب جدید</button>
                    </div>
                </div>

                <div className="col">
                    <h2>Column 2</h2>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                    <p>Hello World!</p>
                </div>

                <div className="col">
                    <h2>Column 3</h2>
                    <p>Some other text..</p>
                    <p>Some other text..</p>
                </div>
            </div>
            <Modal open={isModalOpen} footer={null} closable={false}>
                <div className="d-flex">
                    <img src={imgBank} alt="" />
                    <p>{nameBank}</p>
                </div>
                <div>
                    <label>شماره کارت</label>
                    <input type="text"
                        placeholder=""
                        id="cardNumber"
                        value={value}
                        onChange={(e) => handleChange(e)}
                        maxLength={16}
                    />
                    <span className="erorr">{erorr}</span>
                </div>
                <div>
                    <label>شماره شبا</label>
                    <input type="text"
                        placeholder="shabaNumber"
                        id=""
                        value={valueShaba}
                        onChange={(e) => handleChangeShaba(e)}
                        maxLength={24} />
                    <span className="erorr"></span>
                </div>
                <div>
                    <button className="ant-btn" onClick={handleCancel}>برگشت</button>
                    <button className="ant-btn-primary ant-btn" onClick={handleOk}>ثبت</button>
                </div>
            </Modal>

        </>
    )
}

export default AddBankCard;