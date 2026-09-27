export const name="palette-thin";
export const id="dl_b752d1c8c0fb4f59b47d";
export const url=new URL("../icons/palette-thin.svg?v=2d3dc6da15d2c432438b6352605ca802195136ee433398bfa0f3cf0565206315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
