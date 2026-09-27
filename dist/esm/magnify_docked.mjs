export const name="magnify_docked";
export const id="dl_a1821a4713dc8495e0a5";
export const url=new URL("../icons/magnify_docked.svg?v=b884113c97e7c5d1cf1dc0a5f8e4232eb26f450cd78c487e3f7f355f0d4c535a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
