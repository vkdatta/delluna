export const name="grading-fill";
export const id="dl_b6c6d76bdc645b9ea2b2";
export const url=new URL("../icons/grading-fill.svg?v=6b4f577037a04a0e09175e9dd7487f759d5394ccb272efd715871a3d964f82df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
