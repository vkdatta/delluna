export const name="no_flash-fill";
export const id="dl_3faa2b813a817220c1f7";
export const url=new URL("../icons/no_flash-fill.svg?v=df8293e7e26ed1c88edefcc9ea9ea9dd334590b1423217727abb092cc2250e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
