export const name="heart_plus";
export const id="dl_f7b48b58b1dc3ab6a0ec";
export const url=new URL("../icons/heart_plus.svg?v=220fdb8c3da94aa43d5f813092adeb02e6d6edfa62df095df34e4862fc90a60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
