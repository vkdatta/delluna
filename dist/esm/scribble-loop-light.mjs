export const name="scribble-loop-light";
export const id="dl_b8aa871f00414a7881dc";
export const url=new URL("../icons/S/scribble-loop-light.svg?v=8af90ed33ebf49486c5da918e6b38d765b798d9904e3884bc82485f13c195e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
