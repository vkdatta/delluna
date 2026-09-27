export const name="leaf-duotone";
export const id="dl_721585956dbb45b8b9a7";
export const url=new URL("../icons/leaf-duotone.svg?v=b3e2e0aea1ff84158817debf0260095490984fa9a19b726711a262e8d263fef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
