export const name="boxing-glove";
export const id="dl_dbdbaef1d86e4637845b";
export const url=new URL("../icons/boxing-glove.svg?v=2c078183d8d9fd7083fc6cccfd32a1de325dd3fc6a3289a5b3d9e7495ad785aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
