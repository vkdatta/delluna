export const name="funnel-x-light";
export const id="dl_08bf2cfaa3d245f5a21a";
export const url=new URL("../icons/funnel-x-light.svg?v=84ff2cb0140cba9548920ebdc26a91101a531150a1387dad210aad8c8bd27990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
