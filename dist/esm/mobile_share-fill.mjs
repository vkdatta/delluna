export const name="mobile_share-fill";
export const id="dl_823bcf053cf148d9b484";
export const url=new URL("../icons/M/mobile_share-fill.svg?v=b305d59e052c365fb45a6b56881935e894ef1295c2edd5c293bbb26433b08308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
