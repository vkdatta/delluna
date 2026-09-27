export const name="circle-add";
export const id="dl_f1d1b51adaa55342676b";
export const url=new URL("../icons/circle-add.svg?v=a93c033c9a8426ee935d16272f5ec73c860e3624d0e6a4f7934bb737a701c734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
