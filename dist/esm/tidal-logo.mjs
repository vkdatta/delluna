export const name="tidal-logo";
export const id="dl_9f55b289faf375564053";
export const url=new URL("../icons/tidal-logo.svg?v=528f78701b9f21e125fce43f4387839614a1ee650edfee1312f7a2d514f99c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
