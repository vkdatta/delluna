export const name="equals-light";
export const id="dl_1b50c029f6f345749701";
export const url=new URL("../icons/equals-light.svg?v=dc2fd7428fe45f75022b772459bb38865256bc2dcbf616e122e13049e94c5bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
