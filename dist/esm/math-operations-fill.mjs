export const name="math-operations-fill";
export const id="dl_ab2250bdab8d4409b216";
export const url=new URL("../icons/math-operations-fill.svg?v=f278672001703e4aa05eb94654840956a3f560a503f1cc02a344cdb325373497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
