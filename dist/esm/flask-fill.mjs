export const name="flask-fill";
export const id="dl_cd82cd040dcf4a109bd5";
export const url=new URL("../icons/flask-fill.svg?v=70d0eff1138385b1d01709f7f88111f4c4328662aa7e911c8bf86f513691fdf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
