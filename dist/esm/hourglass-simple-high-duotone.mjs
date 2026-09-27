export const name="hourglass-simple-high-duotone";
export const id="dl_cb5d7434857840fca53a";
export const url=new URL("../icons/hourglass-simple-high-duotone.svg?v=3452021ad7c63aec70a05951c802536ddae447c1e1d468282af0b3e3cf950729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
