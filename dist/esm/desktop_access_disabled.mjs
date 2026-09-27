export const name="desktop_access_disabled";
export const id="dl_8807f0378a2e98f2bb22";
export const url=new URL("../icons/desktop_access_disabled.svg?v=3a7b9becdfcb0dab5da8eb1ac55d186704edc51cac53e56fb336a4ebeb4c102b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
