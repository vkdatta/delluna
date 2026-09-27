export const name="filter_retrolux-fill";
export const id="dl_bf7e1094d14bf141ff47";
export const url=new URL("../icons/filter_retrolux-fill.svg?v=5fbb37cbbba16e1e9af1d415df1a33e23734f45227ef109ed102e579fcaf4f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
