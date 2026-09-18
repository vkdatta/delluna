export const name="car_tag-fill";
export const id="dl_56f8dbc7c82b45f3a58e";
export const url=new URL("../icons/car_tag-fill.svg?v=02e734c4fd588f809a7227d6d6beab25b9a66bf9546eb652d7cb38245c8c5f8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
