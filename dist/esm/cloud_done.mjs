export const name="cloud_done";
export const id="dl_03f34264ee5f5f3330e0";
export const url=new URL("../icons/cloud_done.svg?v=19e5f396663fd1e650423e136f3ddc50cf8cf315ed25e2633920de5421cbbccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
