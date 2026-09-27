export const name="fast-forward-duotone";
export const id="dl_130934edd8184db7b2ca";
export const url=new URL("../icons/fast-forward-duotone.svg?v=d2ad0173d078d9ed194b2ab35d8aa3fc0bcb031b9a4ddedd5cb22e706c6d4a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
