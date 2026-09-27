export const name="network-x";
export const id="dl_1422a055fbf24f8f8cbb";
export const url=new URL("../icons/network-x.svg?v=02faa3b474cb7a8c4b8f987726de1842cfe44aeed3f440e87bf3b86a6fe5a00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
