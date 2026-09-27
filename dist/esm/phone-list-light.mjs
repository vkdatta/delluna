export const name="phone-list-light";
export const id="dl_f635ec0c86324cdba15f";
export const url=new URL("../icons/phone-list-light.svg?v=af28b58bbc2f379248a9bb8646591290087dd86dc098e7b9862ba435fe3b4426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
