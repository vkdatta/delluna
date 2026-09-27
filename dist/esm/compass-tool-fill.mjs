export const name="compass-tool-fill";
export const id="dl_f14725cba0b34de5929b";
export const url=new URL("../icons/compass-tool-fill.svg?v=abaefb7417e65f811be056a2f95fbe41bbc786b427de632b26c04b7da67a60e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
