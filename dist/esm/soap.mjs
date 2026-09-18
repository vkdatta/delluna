export const name="soap";
export const id="dl_c9b2772e9d1240b4b060";
export const url=new URL("../icons/soap.svg?v=a6f06a20b75dfa26409de8f508b376a04975251aefa87493466dbb7d97c2cd39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
