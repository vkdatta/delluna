export const name="compost-fill";
export const id="dl_38e04d4189f5c8446c16";
export const url=new URL("../icons/compost-fill.svg?v=4dbcd26f765a213829973891330c044d98e2870da5c235ea8baf46dd2a5da869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
