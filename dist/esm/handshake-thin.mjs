export const name="handshake-thin";
export const id="dl_299844ef8b3547bdae3e";
export const url=new URL("../icons/handshake-thin.svg?v=6a5a4092ed879562fa1ef376760a974420db69c4b9cd5540315a2c6af41054ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
