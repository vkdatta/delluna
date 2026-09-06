export const name="heartbeat-duotone";
export const id="dl_8cd1dea33c1348e5b32c";
export const url=new URL("../icons/heartbeat-duotone.svg?v=8d6d067a060af5d379c75a8b51227304aff9ed076b95761f0c9aa4db610da748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
