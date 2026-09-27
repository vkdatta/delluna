export const name="battery-vertical-low-duotone";
export const id="dl_af131da63a0a44c2b0e4";
export const url=new URL("../icons/battery-vertical-low-duotone.svg?v=78bc1f2d3ca781121ac72b49930d8db0e643dedccc52e0585f1635643af6c0a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
