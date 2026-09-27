export const name="bath_bedrock";
export const id="dl_d3b1aa951a4e84ca5d02";
export const url=new URL("../icons/bath_bedrock.svg?v=811437bc70bb3c6d1113d71bf1af4c16767a9be85537e143e53c0a0b97216110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
