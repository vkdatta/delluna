export const name="user-pen";
export const id="dl_b4e30c82d8b941189a92";
export const url=new URL("../icons/user-pen.svg?v=4d2388b489b0f933fa83d39b64d274a75c7dfdfb0b382ad2503f407d720780dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
