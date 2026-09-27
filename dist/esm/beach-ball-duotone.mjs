export const name="beach-ball-duotone";
export const id="dl_fde7f2879cda45f1bc55";
export const url=new URL("../icons/beach-ball-duotone.svg?v=5193a4bd8169dea79c1602caeb614da7f52ad5430b12803ad1a7bd888fd3edc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
