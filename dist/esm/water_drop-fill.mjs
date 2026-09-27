export const name="water_drop-fill";
export const id="dl_737671c2ee8faecb4f73";
export const url=new URL("../icons/water_drop-fill.svg?v=37e0cdb78f17de09db5d54d02f91be5bf3056ba7215774808a49748c5169d3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
