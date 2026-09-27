export const name="flip_to_front-fill";
export const id="dl_0f751fc0ca2a59a2aa0f";
export const url=new URL("../icons/flip_to_front-fill.svg?v=4d43cedaa1e18664e24a3292828f1199505e57cfbf5d05a0c9d7af52a4fb73f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
