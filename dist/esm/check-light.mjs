export const name="check-light";
export const id="dl_dd56f479ae5c4a7e82dc";
export const url=new URL("../icons/check-light.svg?v=41fda52ef989c3de422a6df22fcee1117afb86a230c253a4833a1e82330ec3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
