export const name="file-html-light";
export const id="dl_950b4d9cd31d4bf687fb";
export const url=new URL("../icons/file-html-light.svg?v=488201b60942e30b33eb9131c9d606817ee70cdeb6099eb0c66fc95a0fe4e5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
