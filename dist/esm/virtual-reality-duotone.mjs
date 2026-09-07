export const name="virtual-reality-duotone";
export const id="dl_5b169997f01945fcbb06";
export const url=new URL("../icons/V/virtual-reality-duotone.svg?v=020f88db117a5d8debdc894696376936b4901bd04af87ef0e0505eb8b4b752fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
