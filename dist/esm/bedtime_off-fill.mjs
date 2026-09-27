export const name="bedtime_off-fill";
export const id="dl_ea75bfe00e57edf802b2";
export const url=new URL("../icons/bedtime_off-fill.svg?v=d6894b29a44ae25c7611f7cabac9f7316e82afdf92df966dc602a437ec593480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
