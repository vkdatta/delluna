export const name="file-dashed-light";
export const id="dl_e4c1bf731cd14b3ebd9b";
export const url=new URL("../icons/file-dashed-light.svg?v=5f62b141efa956eaa4cdc4785c4fbe6991cad1ed8e68219e3967af3bbe235166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
