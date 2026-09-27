export const name="tab_close_right-fill";
export const id="dl_1920cf337a42392b321c";
export const url=new URL("../icons/tab_close_right-fill.svg?v=fff43d7301a40eba3e1283949d06aeb95eb0524f448bd63f549565f67edd392c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
