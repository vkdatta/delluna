export const name="upload-simple-duotone";
export const id="dl_e67d88e1254870b9c488";
export const url=new URL("../icons/upload-simple-duotone.svg?v=7e5fdfcf39cae34889f71de3cf049311258eb1b6d128e0d588dec1929b6c5d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
