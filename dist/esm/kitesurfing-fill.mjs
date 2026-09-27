export const name="kitesurfing-fill";
export const id="dl_6a503ffec41d60cf211a";
export const url=new URL("../icons/kitesurfing-fill.svg?v=427480acabfe4e9f449c573ef0f1f063872eace91d8fcb6386f5fe29b6202e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
