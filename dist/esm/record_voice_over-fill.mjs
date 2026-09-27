export const name="record_voice_over-fill";
export const id="dl_99d2c45daafed76c3302";
export const url=new URL("../icons/record_voice_over-fill.svg?v=98c32347ebfc0b5d24f61fcca1110a631842280920f8757009d78258ab8c0568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
