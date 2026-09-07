export const name="wifi-x-fill";
export const id="dl_5153542fd22642f78935";
export const url=new URL("../icons/W/wifi-x-fill.svg?v=f87987704f13eaf6d551d214a1bb1bc24436e7738d42bede4d3c273015036020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
