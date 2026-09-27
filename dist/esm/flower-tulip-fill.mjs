export const name="flower-tulip-fill";
export const id="dl_26eb6308c14f4683a24d";
export const url=new URL("../icons/flower-tulip-fill.svg?v=4313c3962ae80b42adf8002ba5fe45f1a79f2f40d88bdceccfb61c3706273ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
