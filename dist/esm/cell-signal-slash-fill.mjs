export const name="cell-signal-slash-fill";
export const id="dl_1f43fb4b2c2240618dfa";
export const url=new URL("../icons/cell-signal-slash-fill.svg?v=415eedf88304814b5c39cd2736e830d8da558ac19cae70123807443acaca7f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
