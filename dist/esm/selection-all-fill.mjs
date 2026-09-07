export const name="selection-all-fill";
export const id="dl_4c7e3b00319148e5a304";
export const url=new URL("../icons/S/selection-all-fill.svg?v=0915fd72102ba5e6dc9ab0d476f655cbf7269fa247f0771e75e8dfc3092e53df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
