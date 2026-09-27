export const name="megaphone-light";
export const id="dl_8e3847892a134f7589e4";
export const url=new URL("../icons/megaphone-light.svg?v=b8df190d3f494594001ddfac2c33c1ea20f736f46bba2f6ce84994c620555c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
