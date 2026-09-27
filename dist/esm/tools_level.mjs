export const name="tools_level";
export const id="dl_3da32dc2f123c9fd5649";
export const url=new URL("../icons/tools_level.svg?v=646219abb3e5bd4cd5f5e35d0bd5a7073bc5c9a0b27703407f7a106fec812f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
