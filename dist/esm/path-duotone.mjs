export const name="path-duotone";
export const id="dl_f6cdc451fe9148c79066";
export const url=new URL("../icons/path-duotone.svg?v=e48f5f4cb3834df33ba60a87efd2e0a51c8e3e6ab38ee7f5987cb4a3c9e7e83d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
