export const name="stacked_email-fill";
export const id="dl_8d16ec3ffaa0e687da54";
export const url=new URL("../icons/stacked_email-fill.svg?v=348f753f140dfaebeb6d990189a8ab5ce12b5d447d6d72458236f7a8b1129537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
