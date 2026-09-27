export const name="wifi-none";
export const id="dl_60548e70ce45ba86317f";
export const url=new URL("../icons/wifi-none.svg?v=7cba6b2329a1955e2ec0122cd34b19f80a48a3165209f66e76ffaf1adbdd8f2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
