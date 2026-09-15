export const name="beach_access-fill";
export const id="dl_d2cdd84b6aa94fc3affa";
export const url=new URL("../icons/B/beach_access-fill.svg?v=a9ad07e21ccbdf24eb36969267fffb64eaf129c32c08b044fac122f2d1326250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
