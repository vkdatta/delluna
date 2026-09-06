export const name="hand-waving";
export const id="dl_1bf82864c6114faf9c0d";
export const url=new URL("../icons/hand-waving.svg?v=07c4c9d18c9a4c86508fde52cddaf95aa1499552c99bfeebc404d5b991fdf41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
