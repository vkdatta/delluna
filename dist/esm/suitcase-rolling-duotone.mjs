export const name="suitcase-rolling-duotone";
export const id="dl_83a6cc0380ecdd637d2f";
export const url=new URL("../icons/suitcase-rolling-duotone.svg?v=0c5c350231265ace3a60e6e7c83afbadef447d4f853ec28f7a82f59324bd3d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
