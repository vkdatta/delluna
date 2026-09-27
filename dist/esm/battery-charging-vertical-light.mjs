export const name="battery-charging-vertical-light";
export const id="dl_ab4d5484b8e64f84b07b";
export const url=new URL("../icons/battery-charging-vertical-light.svg?v=1beded5fc8c003600b66ddd1c82e34d89805a6e7460d21fb6ac1d3905c54aa46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
