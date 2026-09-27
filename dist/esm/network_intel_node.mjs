export const name="network_intel_node";
export const id="dl_8908068e57826625ab37";
export const url=new URL("../icons/network_intel_node.svg?v=fb69b5aae313115175739991d9de45b8242f8e68962c4d305c33acb7429705cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
