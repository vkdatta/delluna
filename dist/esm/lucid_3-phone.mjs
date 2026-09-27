export const name="lucid_3-phone";
export const id="dl_cf25a60dab584949b971";
export const url=new URL("../icons/lucid_3-phone.svg?v=4c67a47967b51a94e760b6aff1c0c66c47ef49fd571fa92ddba449c02c3545e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
