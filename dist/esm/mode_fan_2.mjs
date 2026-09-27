export const name="mode_fan_2";
export const id="dl_66d341e3afb43abd8817";
export const url=new URL("../icons/mode_fan_2.svg?v=32fe5c2c680658abb17afa7083a4275713edd449cfdb572fe52a0591a9a43898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
