export const name="mobile_rotate-fill";
export const id="dl_8835d8a85ab7eea2bc74";
export const url=new URL("../icons/mobile_rotate-fill.svg?v=b46c0477db4cb1532eed09c46199d2ccb1a77c7c9a0ff001f10b70e22262d23e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
