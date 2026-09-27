export const name="clock_loader_90-fill";
export const id="dl_7b70d2289e6c6aaed2b8";
export const url=new URL("../icons/clock_loader_90-fill.svg?v=fb4f9840390c894b5ece47f91769149daf5cb9541d97dad1005ce2bc5c7fb57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
