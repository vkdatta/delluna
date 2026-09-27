export const name="download-light";
export const id="dl_2e10340e952c4527bb13";
export const url=new URL("../icons/download-light.svg?v=dafdb08515cc82f0f4c702183c67e811be8bd4db8d5f4d3f7fcb28cf036c589c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
