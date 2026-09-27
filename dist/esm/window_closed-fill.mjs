export const name="window_closed-fill";
export const id="dl_725d46aae246869edcc8";
export const url=new URL("../icons/window_closed-fill.svg?v=f14fc35e2bd6c733d476324c8e11a37490d3c44f9864c24fb3f029291d87eb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
