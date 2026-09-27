export const name="tilde-fill";
export const id="dl_ad04c11ebe0eb4f43fd0";
export const url=new URL("../icons/tilde-fill.svg?v=0d4be58ebf2b5d8141ada513898fe9ba16903a109fdb5819c357b7cb73d1dd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
