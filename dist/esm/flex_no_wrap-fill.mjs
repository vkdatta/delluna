export const name="flex_no_wrap-fill";
export const id="dl_5c78ad648f2811e7edb3";
export const url=new URL("../icons/flex_no_wrap-fill.svg?v=59ab52a426267fb54763c4ed29accc9aa45b77a57dbef7b54f120c378254e5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
