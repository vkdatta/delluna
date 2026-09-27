export const name="lucid_3-server-cog";
export const id="dl_01aa965cc8f64000a505";
export const url=new URL("../icons/lucid_3-server-cog.svg?v=a751dc4c8b423fef8fa5abf57eeead3bcd04b946d88d82af3b5ef007c0185b46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
