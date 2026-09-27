export const name="mic_external_on-fill";
export const id="dl_e28c5cf8d974e7e25742";
export const url=new URL("../icons/mic_external_on-fill.svg?v=02b8fe5dacff2900397f4363e29af6ff43cfdd3d4ac11d600cc1f68bdb513d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
