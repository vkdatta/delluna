export const name="cube-light";
export const id="dl_4579d6932fb5486c88d6";
export const url=new URL("../icons/cube-light.svg?v=7543f66cdc8b414949ac19f3247f9859ccf8b182235cee5bc6ca2872167809be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
