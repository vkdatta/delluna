export const name="number-zero-bold";
export const id="dl_ee0c566ab2524a3e823a";
export const url=new URL("../icons/number-zero-bold.svg?v=dda8ef03c4a6fb4ea39784f557e911039116c1c914d3c48ac5fd4688cbcdb9e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
