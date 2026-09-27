export const name="lucid_3-soap-dispenser-droplet";
export const id="dl_44e31384f7a947428881";
export const url=new URL("../icons/lucid_3-soap-dispenser-droplet.svg?v=9cce176a690edf8185e5de8e711aa1e153df43ae9a28802d503c8a539c09e0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
