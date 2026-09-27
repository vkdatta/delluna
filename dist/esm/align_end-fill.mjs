export const name="align_end-fill";
export const id="dl_fe15c756f3e5ddfe37ae";
export const url=new URL("../icons/align_end-fill.svg?v=e33a2c4f04ac3c36a306769dfdcd864ea9e671cd2c51ddef1cfab10de5beaa2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
