export const name="ramen_dining-fill";
export const id="dl_9d0971d1b0735430dcf0";
export const url=new URL("../icons/ramen_dining-fill.svg?v=c59ca8ee8bfcbfdeb090b5841059d1852c18a6537ed5dfa1d7f52c9ddc500cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
