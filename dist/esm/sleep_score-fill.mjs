export const name="sleep_score-fill";
export const id="dl_fbab160a4dfdec185929";
export const url=new URL("../icons/sleep_score-fill.svg?v=e021f253e1d550dbf358248cf85142f148a5481461e1decb935eeb33ebcd8c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
