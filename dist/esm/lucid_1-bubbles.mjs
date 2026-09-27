export const name="lucid_1-bubbles";
export const id="dl_fe9e6420b43c48609b5d";
export const url=new URL("../icons/lucid_1-bubbles.svg?v=f46c43031f6bb5d46721ceee7933b0dd8bca5f5f70883267ce54b00eefd55c4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
