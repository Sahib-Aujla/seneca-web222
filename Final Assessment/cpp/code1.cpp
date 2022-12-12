class Name {
   char* m_value;
public:
   Name(const char* value = nullptr);
   Name(const Name& N);
   Name& operator=(const Name& N);
   virtual ~Name();
   virtual void display(std::ostream& ostr);
};

class Car: public Name {
    char * m_model;
    public:
    Car(const char*name,const char*model):Name(name){
        if(model!=nullptr){
            m_model=new char[strlen(model)+1];
            strcpy(m_model,model);
        }
    }
    Car(const Car& c){
        m_model=nullptr;
     *this=c;
    }
    Car& operator=(const Car& obj){
        if(this!=&obj){
            delete[] m_model;
            Name::operator=(obj);
            m_model=new char[strlen(obj.m_model)+1];
            strcpy(m_model,obj.m_model);

        }
        return *this;
    }
    virtual ~Car(){
        delete[] m_model;
    }
    void display(std::ostream& ostr){
        Name::display(ostr);
        ostr<<m_model<<endl;
    }

};