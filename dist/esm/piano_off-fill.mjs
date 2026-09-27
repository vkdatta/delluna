export const name="piano_off-fill";
export const id="dl_24320911d7612ab7f072";
export const url=new URL("../icons/piano_off-fill.svg?v=201bc0b139a106f5264be9a21512fabec232252151b7d3294dcc930a14b425cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
