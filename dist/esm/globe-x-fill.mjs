export const name="globe-x-fill";
export const id="dl_38d04d4039cc420c9378";
export const url=new URL("../icons/globe-x-fill.svg?v=4e9017b1704e4452e6f9fb8e5e7d85e500bb7689818e929bcfe8e3e0691e27e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
