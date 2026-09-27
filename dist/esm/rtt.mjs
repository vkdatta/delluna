export const name="rtt";
export const id="dl_2155e35765149f9f9a9f";
export const url=new URL("../icons/rtt.svg?v=7b5f10b8f875820686566bf33b983074a25b5545c61f83cfbafc753b8a8d45e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
