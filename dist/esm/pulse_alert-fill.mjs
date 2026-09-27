export const name="pulse_alert-fill";
export const id="dl_f52904af9d3e2a783c7e";
export const url=new URL("../icons/pulse_alert-fill.svg?v=0f3bd5d3ce7c8d50c148aa99e6e684aece343862c8de3294acd730185d7b52d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
