## State yönetimi

- State: Uygulamadaki bileşenlerin sahip olduğu bilgi ve özelliklerdir

- Prop Drilling: Bileşenlerin yukarıdan aşağıya veri taşımasıdır

- Context: Uygulamadaki state'i bütün bileşenler tarafından erişilebilen ve oluşturduğumuz merkezlerde yönettiğimiz state yönetim aracı.

- Redux: Bileşenlerin sahip olduğu ve merkezi olarak tutulması gereken state'lerin yönetildiği merkezi state yönetim aracı.

# Neden Context yerine redux

- Kod tekrarını önler, Performansı daha iyidir, Bileşenler içerisindeki karışıklığı azaltır, Hata ayıklama daha kolaydır, Orta ve büyük ölçekli projelerde state yönetimini daha kolay hale getirir.

# Redux ile ilgili bilinmesi gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve yönetilebilen state deposu.

2. Reducer: Aksiyon ile aldığı talimata göre reducer'da tutulan state'in nasıl güncelleneceğine karar verir.

3.Action: Emir,Eylem, state'in nasıl değişeceğini ifade eder.

--Action iki değere sahip bir nesnedir

- Type: Actionun'un görevini tanımlayan zorunlu string değer.

- Payload: Action yanında gönderdiğimiz veri

4.Dispatch: Sevk etmek, Eylemi reducera aktarmaya yarayan fonksiyondur

5.Subscribe: Abone olmak, Bileşenlerin store'da tutulan veriye erişim sağlaması

6.Provider: Sağlayıcı, Store'da tutulan verileri uygulamaya sağlar
# REACT-REDUX-CRUDAPP
