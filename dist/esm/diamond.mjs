export const name="diamond";
export const id="dl_74f5c7bab0d74f6e80a0";
export const url=new URL("../icons/diamond.svg?v=4852dd7a40a9a378ff2641ffa56c43d684b1cce7aac4d6ae9b490f6ae5df40c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
