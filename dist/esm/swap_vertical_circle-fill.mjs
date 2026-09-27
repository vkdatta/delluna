export const name="swap_vertical_circle-fill";
export const id="dl_bb71f27da15cec854faa";
export const url=new URL("../icons/swap_vertical_circle-fill.svg?v=ca2e6f57425f707132b880b768ad972c2b8c6bd79622321d7ada7f801cd4495e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
