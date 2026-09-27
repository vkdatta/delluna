export const name="scroll-bold";
export const id="dl_39f3bf3ca9166854c475";
export const url=new URL("../icons/scroll-bold.svg?v=4bb16a800b93e51cc08ed4f811427273ed9664947810e790346999b9abd9b4bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
