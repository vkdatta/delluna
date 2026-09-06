export const name="lock-simple-open-duotone";
export const id="dl_f15562f2ed3b4cf696dc";
export const url=new URL("../icons/lock-simple-open-duotone.svg?v=0e4705734aae1ff6201036af22d9ab1b40d0148f0f638a3a72247ad10578dc45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
