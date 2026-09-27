export const name="info-fill";
export const id="dl_29d29a860c0d4cebaab4";
export const url=new URL("../icons/info-fill.svg?v=a739566f66e2f38a3e766ef2f5c6e4e1228290f05cce356e103c7a74759b6374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
