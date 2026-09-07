export const name="speaker-simple-low";
export const id="dl_b5a98dea3263480ea50e";
export const url=new URL("../icons/S/speaker-simple-low.svg?v=28d96758244a88d0ea988ea08da0be445744d525867d750d1886b264f093b226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
