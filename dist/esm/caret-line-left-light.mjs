export const name="caret-line-left-light";
export const id="dl_be747e09edcf48a8a790";
export const url=new URL("../icons/caret-line-left-light.svg?v=c891b1bc2cf79bc6899a6f194a3446d5b09bb910935a686e9c2222aa16d5f4d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
