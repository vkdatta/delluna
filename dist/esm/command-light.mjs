export const name="command-light";
export const id="dl_89df09f71b7147f99e3a";
export const url=new URL("../icons/command-light.svg?v=96b2b1b18957b31492ee267f89b7455db097f5ee7074b4759d386656b877274c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
