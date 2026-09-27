export const name="cloud_upload-fill";
export const id="dl_361cb8798447e2470b36";
export const url=new URL("../icons/cloud_upload-fill.svg?v=22dab4d08cc2ffac4fd66206980cca3f863f83f21e6b2a6c9d3f298e1e9a1843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
