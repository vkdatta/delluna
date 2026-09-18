export const name="tools_flat_head";
export const id="dl_c64136500a434d8b84ac";
export const url=new URL("../icons/tools_flat_head.svg?v=ede3f104c82f07bfaf58054aa8f1a7357b563d10a839a22c012413f03099c2b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
