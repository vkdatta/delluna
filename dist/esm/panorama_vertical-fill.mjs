export const name="panorama_vertical-fill";
export const id="dl_b2b6b88c12bee0bace1c";
export const url=new URL("../icons/panorama_vertical-fill.svg?v=06daaf4b0e5c0a156f8b5209c05e96c8b8ec3f79efb98e816d486756161a63bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
