export const name="lucid_3-soap-dispenser-droplet";
export const id="dl_44e31384f7a947428881";
export const url=new URL("../icons/lucid_3-soap-dispenser-droplet.svg?v=9f4b9ff25bad2dfa33b28ab3ee813105c3dceed3201d7f25c58329724db931d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
