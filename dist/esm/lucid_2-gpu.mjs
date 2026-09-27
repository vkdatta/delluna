export const name="lucid_2-gpu";
export const id="dl_fb95bcfa515848318491";
export const url=new URL("../icons/lucid_2-gpu.svg?v=acb8586174e602e71075aa34337e35102c80bb7c7dc513a41ecf48decab9d5b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
