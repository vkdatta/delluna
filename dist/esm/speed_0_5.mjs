export const name="speed_0_5";
export const id="dl_14721d0b3be80526ae75";
export const url=new URL("../icons/speed_0_5.svg?v=bb52ad5c11161f5aa0fb1b8195caf7de02a9af8f842c45552acfd281cb728018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
