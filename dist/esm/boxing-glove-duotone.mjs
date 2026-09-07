export const name="boxing-glove-duotone";
export const id="dl_e3e10d64a9394783992c";
export const url=new URL("../icons/boxing-glove-duotone.svg?v=530eec9c85f721feea305515e8ce8672f3a1989f59aa8dc0d60699cbcc601118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
