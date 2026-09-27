export const name="mouse-left-click-duotone";
export const id="dl_ec07f598361f4c41a232";
export const url=new URL("../icons/mouse-left-click-duotone.svg?v=626bf85351d6f5be74b13117f4a5afae8cefd940fedfb79d200370d66b6ca1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
