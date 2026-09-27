export const name="lucid_3-shield-cog";
export const id="dl_650b3be775be45ed86f8";
export const url=new URL("../icons/lucid_3-shield-cog.svg?v=dc51708424063a4c3817c8b11fea634468881a2c9ff4ed88c49e803748bc403a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
