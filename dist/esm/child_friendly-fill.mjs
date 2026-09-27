export const name="child_friendly-fill";
export const id="dl_6d1d33d93a9160212830";
export const url=new URL("../icons/child_friendly-fill.svg?v=e9484b4f6b8121d84809b0c8564f5869d5a20d7a18f45314f8a66959ba3e0a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
