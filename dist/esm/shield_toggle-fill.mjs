export const name="shield_toggle-fill";
export const id="dl_092f6818366f61801f31";
export const url=new URL("../icons/shield_toggle-fill.svg?v=f358055f6f1b5c79621af66145fa41406783d7af232fc4a17ffe7da181c1c2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
