export const name="unfold_more_double-fill";
export const id="dl_443095b056cccbf2f876";
export const url=new URL("../icons/unfold_more_double-fill.svg?v=22e43d4fe8b5f378b639e5d7b4747bf1b24b1a8142248d3d293da92b7ea74c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
