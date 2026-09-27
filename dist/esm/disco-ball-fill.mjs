export const name="disco-ball-fill";
export const id="dl_365aff86927e4bad8f91";
export const url=new URL("../icons/disco-ball-fill.svg?v=8ecfb29ef289f4a816fe9ca9bdf04799b92762022e446004f32a78d7a85a4474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
