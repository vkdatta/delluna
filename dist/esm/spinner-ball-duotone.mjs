export const name="spinner-ball-duotone";
export const id="dl_ff637576693f241c9396";
export const url=new URL("../icons/spinner-ball-duotone.svg?v=7f3f2eeb765a9dc4727593d93bca1b9ed46351bc568d7287f20886636a2151f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
