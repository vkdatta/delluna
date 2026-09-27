export const name="hdr_plus_off";
export const id="dl_f673c798e9d7a03f73e6";
export const url=new URL("../icons/hdr_plus_off.svg?v=2d8e7d6e0e8a318cc678e1dcf5cd29396ac28d7ed916f184c6a2e664a9c17d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
