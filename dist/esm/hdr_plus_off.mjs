export const name="hdr_plus_off";
export const id="dl_bce76b2f17ca8c880ebc";
export const url=new URL("../icons/hdr_plus_off.svg?v=a5bd2f1b757030a033586524ec43c1b888aa209a861eaee6ecf3efcd778209f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
