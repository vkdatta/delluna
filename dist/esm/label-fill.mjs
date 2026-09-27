export const name="label-fill";
export const id="dl_94dbf53796ec6c0165bf";
export const url=new URL("../icons/label-fill.svg?v=9dcb420438deee28c10516f1f6f5d0bd5d7d5e888524575080f36909b827a17f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
