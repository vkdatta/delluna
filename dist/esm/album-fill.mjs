export const name="album-fill";
export const id="dl_6f7afb4937c9e4e87821";
export const url=new URL("../icons/album-fill.svg?v=324798678bb7bf1df30dc6a2fb9fe275a57a800c9619dc3a009f414660005534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
