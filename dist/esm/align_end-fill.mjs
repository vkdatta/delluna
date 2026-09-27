export const name="align_end-fill";
export const id="dl_fed0d8fd24a79849dd58";
export const url=new URL("../icons/align_end-fill.svg?v=3465a5d9ce81f4118d035a3b08e07690d08859097070634f523928ad81d841ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
