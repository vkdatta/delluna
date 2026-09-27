export const name="lucid_3-shield-keyhole";
export const id="dl_1b13002b8b984924a3ba";
export const url=new URL("../icons/lucid_3-shield-keyhole.svg?v=d2b2d5413e1a0a8f747cfff8cda35bbd0a30cea87b80bb4b69558492a7235f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
