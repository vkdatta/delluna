export const name="mic_external_off-fill";
export const id="dl_479d4a460e8b6d62dbcf";
export const url=new URL("../icons/mic_external_off-fill.svg?v=357c5ccdc9a7402c1065555d1b22a35edac35bcb2a3ff25cdef6f14226531833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
