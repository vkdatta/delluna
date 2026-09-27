export const name="lucid_3-mouse-pointer";
export const id="dl_8a8be6e68b3b4b3589ad";
export const url=new URL("../icons/lucid_3-mouse-pointer.svg?v=23bfba85154be5528d26f5e560a7312b51e17b83a86821f5dce31cebbeb7e97a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
