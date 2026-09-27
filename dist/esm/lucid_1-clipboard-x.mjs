export const name="lucid_1-clipboard-x";
export const id="dl_bb1ba7776fca4d4198a1";
export const url=new URL("../icons/lucid_1-clipboard-x.svg?v=70380db1ab7d5a0315efa2c818205806eb6272d439114098ab98c8a3919b0d69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
