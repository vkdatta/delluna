export const name="number-square-four-bold";
export const id="dl_b1b591250f4044c19483";
export const url=new URL("../icons/number-square-four-bold.svg?v=0abe203fc40e3fbf37142eaec27ea8857b251bd0627d7b3b79be787328690839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
