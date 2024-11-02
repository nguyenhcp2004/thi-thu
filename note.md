# Hướng Dẫn Thiết Lập Dự Án

## Cấu Trúc Thư Mục

- **forder/api**: Chứa API để thay đổi URL theo MockAPI của mình.
- **forder/layout**: Chứa layout của ứng dụng; ae có thể copy luôn thư mục này và thanh navbar cũng được (thấy đề nào cũng giống nhau).
- **useRouteElement**: Dùng để thêm các route.
- **components/card**: Chứa card để show thông tin của các object đã CSS và hiệu ứng; thay đổi lại thông tin cho đúng.
- **utils/rule**: Chứa validation schema mình sẽ dùng để validate form create và update.

## Thư Viện Sử Dụng

Dự án này dùng MUI, nên ai không dùng MUI có thể sẽ khó hiểu (ý kiến cá nhân, thư viện nào cũng như nhau).

Nếu dùng MUI thì trong đây:

- Thẻ **Box** tưởng tượng như thẻ **div**.
- Thẻ **Typography** như thẻ **h1, h2, h3...**. Nếu có thời gian, đọc sơ qua các component mình sẽ sử dụng trong MUI ở dự án này.

## Quy Trình Bắt Đầu Làm Bài

1. **Tạo project:**
   ```bash
   npm create vite@latest
   ```

chọn javascript

2. **Cài các thư viện cần thiết**

```bash
  npm i react-router-dom
  npm install @mui/material @emotion/react @emotion/styled
  npm i axios
  npm i formik
  npm i yup
  npm i react-toastify
```

3.**Copy lại các page nhưng sẽ phải sửa lại cho đúng field**

4.**Copy useRouteElement, App.jsx, main.jsx**

5.**App.css và index.css sẽ không cần dùng nên là mình có thể xóa lun cũng được**

## CHÚ Ý:

1. route dashboard tùy mỗi kì mà yêu cầu khác nhau, (có lúc là /masosinhvien lúc là /dashboard) nên đọc kĩ đề và vào useRouteElement, với navbar của mình để sửa cho đúng
2. folder có log lại lịch sử tạo nên KHÔNG NÊN setup trc, KHÔNG NÊN dùng luôn suộc này mà chỉ để copy
3. làm delete trước rồi create update sau
4. trang home đôi khi nó có yêu cầu sắp xếp theo field nên đọc kĩ

## LỜI CUỐI CÙNG:

Chúc ae thi may mắn cx như dùng hết công năng của cái suộc.
