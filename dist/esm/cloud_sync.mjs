export const name="cloud_sync";
export const id="dl_7d372bc539e36d210797";
export const url=new URL("../icons/cloud_sync.svg?v=c3d3a348fd1fba15340b2d76c36748af9075162c0a5d2eecb918a7d6181b8e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
