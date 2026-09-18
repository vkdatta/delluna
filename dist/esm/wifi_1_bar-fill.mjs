export const name="wifi_1_bar-fill";
export const id="dl_bb432669758842e9994a";
export const url=new URL("../icons/W/wifi_1_bar-fill.svg?v=beb7b18bd5809e3f437c43a037785389ee4cc023d287da305eb4b33a71c50605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
