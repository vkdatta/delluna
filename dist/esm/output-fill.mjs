export const name="output-fill";
export const id="dl_317ef3da4c6f2025ad57";
export const url=new URL("../icons/output-fill.svg?v=d43c3c3b8f5f20295f10a89eef4c7b8702a51a5c98272d6b657fd4eff720c979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
