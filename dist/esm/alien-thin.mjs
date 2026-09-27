export const name="alien-thin";
export const id="dl_bf700c492c0145769291";
export const url=new URL("../icons/alien-thin.svg?v=6cc34b28e5960c61efccedbbfecf1f6f7576bdf61e17ab64b02eeab754dab924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
