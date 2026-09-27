export const name="lucid_3-soap-dispenser-droplet";
export const id="dl_44e31384f7a947428881";
export const url=new URL("../icons/lucid_3-soap-dispenser-droplet.svg?v=326795d0c8fe7a473560c0a5d646de900f19c00b2e0e31b069a9f190def6cc36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
