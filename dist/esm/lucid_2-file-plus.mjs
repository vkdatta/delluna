export const name="lucid_2-file-plus";
export const id="dl_a1c74c6eb5a444738836";
export const url=new URL("../icons/lucid_2-file-plus.svg?v=e2e055cf92de30b61c42d3b19b62513e79d1bbe898de9af5d3edf02630e90d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
