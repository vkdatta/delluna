export const name="hourglass_top-fill";
export const id="dl_1f2a1f33f9a8d647d3f1";
export const url=new URL("../icons/hourglass_top-fill.svg?v=83ba8875aef25f3a6589e0fd84b1ba1cba5ce09ce814bd0dbdb2784fc4ee860d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
