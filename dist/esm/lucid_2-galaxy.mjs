export const name="lucid_2-galaxy";
export const id="dl_af5a969136fd414d9929";
export const url=new URL("../icons/lucid_2-galaxy.svg?v=bbeefb125077f1c266d33670ef305de58de1a5d76597b03cd0770a65664f9249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
