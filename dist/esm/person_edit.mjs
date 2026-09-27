export const name="person_edit";
export const id="dl_51dc0a38d77982ef637b";
export const url=new URL("../icons/person_edit.svg?v=4bde441c9257855f07c5602b69dd53ba230949c772586c06f9263e381bcf2cdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
