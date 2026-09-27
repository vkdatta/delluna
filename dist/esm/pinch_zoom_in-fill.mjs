export const name="pinch_zoom_in-fill";
export const id="dl_184c55aae9d2a8ffdab8";
export const url=new URL("../icons/pinch_zoom_in-fill.svg?v=48dfe307066b2a0d56d94b1811d16de3a07b24923935f5c93c616d53011a4c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
