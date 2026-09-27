export const name="speaker-high-light";
export const id="dl_5f9469b0bb06e064e483";
export const url=new URL("../icons/speaker-high-light.svg?v=649040b9b2db32125c21477a807f6a3c4ef7a399e0de6fc8b256ed3130e3e9d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
