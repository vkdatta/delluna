export const name="fire-truck-fill";
export const id="dl_8295a8fe3e3646d89920";
export const url=new URL("../icons/fire-truck-fill.svg?v=e8fd9583439260d956fa7da217026a118c86fa89f6287ebcd980ba8416f7e0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
