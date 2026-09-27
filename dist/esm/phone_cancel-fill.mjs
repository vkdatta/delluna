export const name="phone_cancel-fill";
export const id="dl_2d75a27a6f2acfcb3f31";
export const url=new URL("../icons/phone_cancel-fill.svg?v=1179eac44af8773cbc9d021f0e514fc9680b361e32fcca5fb78a244d9190776a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
