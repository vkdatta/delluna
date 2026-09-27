export const name="personal_bag_off";
export const id="dl_53bd86f5c1dab027b767";
export const url=new URL("../icons/personal_bag_off.svg?v=cf749b762c4dcd09181c2d8edd5b03ab30c9d64f55d5d11a7b250c8990de6e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
