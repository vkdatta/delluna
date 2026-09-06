export const name="ticket-plus";
export const id="dl_764a3aa3578745b5b8a2";
export const url=new URL("../icons/ticket-plus.svg?v=99aad72feacc426abec5feafa2d56d85f3e9e0b50a9f11cb928a7538e92a80db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
