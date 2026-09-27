export const name="lucid_2-headphone-off";
export const id="dl_ceca4958b4924175bde7";
export const url=new URL("../icons/lucid_2-headphone-off.svg?v=1eb97570ae07770b953e8f03ec3359d38c14749145474742173f573c07b9ef4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
