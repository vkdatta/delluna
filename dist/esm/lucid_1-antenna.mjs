export const name="lucid_1-antenna";
export const id="dl_8fad1ea3a28d43f4a605";
export const url=new URL("../icons/lucid_1-antenna.svg?v=5aeff191f188d1cf8a667772420e514ac871701573153bce9474863ce6fa7e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
