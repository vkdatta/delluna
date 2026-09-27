export const name="fast-forward-light";
export const id="dl_ce25d150d07149c9be70";
export const url=new URL("../icons/fast-forward-light.svg?v=92fd2df4165540a8f4efdb5e3a09d88dbcc371f41671e88c470b303ac7deafb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
