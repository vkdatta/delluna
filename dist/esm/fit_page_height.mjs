export const name="fit_page_height";
export const id="dl_ede46fa1d0b102b076e1";
export const url=new URL("../icons/fit_page_height.svg?v=cfc859f7462e2c74e2a0cc6ac91b370addd9e6d3dff5cd708d2570504b23b164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
