export const name="coffee-bold";
export const id="dl_7a84f274e616478297f7";
export const url=new URL("../icons/coffee-bold.svg?v=adee5cc943bf7f9e6b034e25f6f987c0d47554805ec8c5961fe8cbf46f547747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
