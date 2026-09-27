export const name="pint-glass";
export const id="dl_f27d9e570d4a4d878aed";
export const url=new URL("../icons/pint-glass.svg?v=b3d065f054af6ecfe58ced60a050973d374c381e420b952cb22d7c3894b41293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
