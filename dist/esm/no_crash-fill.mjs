export const name="no_crash-fill";
export const id="dl_e0b7584795715de32fff";
export const url=new URL("../icons/no_crash-fill.svg?v=48b7cf4e89455007d2630f11c078b54267871fce90d33a288ed0d6cd24dc8779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
