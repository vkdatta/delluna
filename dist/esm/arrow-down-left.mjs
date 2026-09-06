export const name="arrow-down-left";
export const id="dl_7a656e238d5b4158bd9f";
export const url=new URL("../icons/arrow-down-left.svg?v=fe639269b8ff85b83e8e6e2af24e2e3e44bad0e0140b7f95a23f575352efc8d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
