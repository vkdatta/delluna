export const name="monitor-arrow-up-bold";
export const id="dl_69961bf6638b4c80bb5f";
export const url=new URL("../icons/monitor-arrow-up-bold.svg?v=369d2606e68ea7623c376016e0d8047d20451f64f2309bbc012bcc06402f82b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
