export const name="terminal-window-duotone";
export const id="dl_7a160b025590e25f339c";
export const url=new URL("../icons/terminal-window-duotone.svg?v=86901dae7bb936364bab6ceb63609c8b27ce9b31e9bc770106ca1856d652d26e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
