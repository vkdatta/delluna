export const name="moped-front-fill";
export const id="dl_3af1d676029644329c33";
export const url=new URL("../icons/moped-front-fill.svg?v=adc5ed621afa74434d1d4e1c4d50bb1e04e6b472c6e055a18e668801327109a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
