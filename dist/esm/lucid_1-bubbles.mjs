export const name="lucid_1-bubbles";
export const id="dl_fe9e6420b43c48609b5d";
export const url=new URL("../icons/lucid_1-bubbles.svg?v=63ea902839549eeb6f9c84878c5bc7e6e2110ac6759dfdb4731a47a7f33a4684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
