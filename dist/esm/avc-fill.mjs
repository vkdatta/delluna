export const name="avc-fill";
export const id="dl_0a192f9fcc500b6fbfdf";
export const url=new URL("../icons/avc-fill.svg?v=1bf8db9aef53d2dde2536f664f4a1c45b15006fa70004b7d8805637b4e9b022d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
