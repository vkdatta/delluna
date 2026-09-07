export const name="flying-saucer-duotone";
export const id="dl_f83af0289ebc48caa1b7";
export const url=new URL("../icons/flying-saucer-duotone.svg?v=1574ad637b26babb0a36afeb3077515f307a043776f58bf441cfc873da3883a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
