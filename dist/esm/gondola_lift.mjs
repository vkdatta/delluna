export const name="gondola_lift";
export const id="dl_f98bbece30b449c89e19";
export const url=new URL("../icons/gondola_lift.svg?v=5e876c84991c177923654ccf546292046ef2c8d3d3002817aa16be2ce74a4df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
