export const name="sock-bold";
export const id="dl_82dbebd763ffb384840a";
export const url=new URL("../icons/sock-bold.svg?v=3d94390c9e173f50e80aaf1134e54c4dbc9cb09c466acd31164b6b16c5cc2141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
