export const name="monitor-duotone";
export const id="dl_2eb3b0821df7420d89c7";
export const url=new URL("../icons/monitor-duotone.svg?v=f3a3dc24b70fdfdb9a491a846e30951d9f2b43fb59f7a1c7ad834b5af37c3778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
