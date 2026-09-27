export const name="float_landscape_2-fill";
export const id="dl_5e5a4f945879d41bff21";
export const url=new URL("../icons/float_landscape_2-fill.svg?v=63710657c03eed036bf375310b59d9a0060fcb2b0d73e4d55c94a1deb01c6bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
