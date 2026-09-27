export const name="record-duotone";
export const id="dl_90e29d56a281442aa8e3";
export const url=new URL("../icons/record-duotone.svg?v=bb11762a9b205544ea92124e94faf4a46fa16b3374f85454799295afcf89816f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
