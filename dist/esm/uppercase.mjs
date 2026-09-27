export const name="uppercase";
export const id="dl_e6709b38f36451af6b79";
export const url=new URL("../icons/uppercase.svg?v=f577494ec3861803ea5dac61ec72053b882b66e3a764dac3ddc01c58b97abaf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
