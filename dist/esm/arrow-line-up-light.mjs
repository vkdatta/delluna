export const name="arrow-line-up-light";
export const id="dl_9244d31613dd42f19b00";
export const url=new URL("../icons/arrow-line-up-light.svg?v=9ceb26633e06953bea9682ada339b0762dc75ffd988ed70d6aec275af80d6411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
