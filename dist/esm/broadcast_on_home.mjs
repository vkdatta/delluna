export const name="broadcast_on_home";
export const id="dl_ac04b027438c930b0a53";
export const url=new URL("../icons/broadcast_on_home.svg?v=bc74f4002d7895d318c7f84aacab5e23e2ed5abcc5857d4ea45f1c1af928e9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
