# Avatar Creator by Name

All names have a custom color code, if `bg` parameter not send. Can be change colors in `helpers/defaults.js`.

Example request: http://localhost:5000?name=orcun%20tuna
 
## Parameters

| Key | Description | Default | Required |
| ------ | ------ | ------ | ------ |
| name | User name and surname or username. There can be more than a word. | null | Yes |
| size | Image canvas size in  pixel. Must be integer. | 128 | No |
| bg | Canvas background color. Can be color name or hex code. | Random | No |
| color | Text color. Must be color name or hex code. | white | No |
| font | Text font size. Must be number. | size * 0.34 | No |
| weight | Text font weight. Must be css font weight properties. | 600 | No |

## Installation

```sh
git clone git@github.com:orcuntuna/avatar.git
cd avatar
npm install
npm run start
```

## License

Apache License 2.0
