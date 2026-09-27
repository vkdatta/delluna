export const name="waveform-fill";
export const id="dl_87a2eb5d8fee6d30b20f";
export const url=new URL("../icons/waveform-fill.svg?v=253ff2b87dad3d82fcea003ecae31cd9f17324060dadfaf613d9c4c6488741bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
