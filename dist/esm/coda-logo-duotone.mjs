export const name="coda-logo-duotone";
export const id="dl_472e68a24cdd40f195ca";
export const url=new URL("../icons/coda-logo-duotone.svg?v=9b18bf6acca257866541f1b6d4bdf128d58e2adf05d96710d559132a2f99954c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
