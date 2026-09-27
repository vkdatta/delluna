export const name="list-magnifying-glass";
export const id="dl_285efe0b6b1046d19827";
export const url=new URL("../icons/list-magnifying-glass.svg?v=415e351a9eba38437e5c23989a8e00642ad1c24185c1362c75c8a5b754090f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
