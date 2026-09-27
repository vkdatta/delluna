export const name="lucid_2-map-minus";
export const id="dl_8a054ee03abc4924a469";
export const url=new URL("../icons/lucid_2-map-minus.svg?v=52e3b3b5f04742d451856c1d64b080003fba71987ab785943c85f0631a5719e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
