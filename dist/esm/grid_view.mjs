export const name="grid_view";
export const id="dl_af5f9aef27201283df03";
export const url=new URL("../icons/grid_view.svg?v=beddcf21e4ef0d459b19d3210c637be9892cf5ebf54996f9bdf57a47bf2f5a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
