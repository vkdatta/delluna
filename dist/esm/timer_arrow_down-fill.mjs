export const name="timer_arrow_down-fill";
export const id="dl_3d15fc80a8aca9a977d2";
export const url=new URL("../icons/timer_arrow_down-fill.svg?v=7f25ba9eb275eac34ca8633a8c0a73bbbd013f47691f9d6521488df2f20c078b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
