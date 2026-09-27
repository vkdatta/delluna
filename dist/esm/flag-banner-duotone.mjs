export const name="flag-banner-duotone";
export const id="dl_4ad1997974cf4456bcbd";
export const url=new URL("../icons/flag-banner-duotone.svg?v=58c96ac948a89bc607115456521d1111fa6aeeb48b24e8a0c9be7a617eac0b53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
