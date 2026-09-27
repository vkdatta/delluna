export const name="lucid_2-git-fork";
export const id="dl_ea81be62858348449361";
export const url=new URL("../icons/lucid_2-git-fork.svg?v=2cb4be7a30bef66547dbcd272a54157a8d0c6c7a12003e9cf4096b63f3b7add0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
