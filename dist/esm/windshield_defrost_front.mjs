export const name="windshield_defrost_front";
export const id="dl_7d5e00c5613955217ecc";
export const url=new URL("../icons/windshield_defrost_front.svg?v=a7fb921c6c2fe45932f7398331620a322ca258ce34d1b353d2787ff0927a32bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
