export const name="shooting-star-duotone";
export const id="dl_e81c0848c23440705fbb";
export const url=new URL("../icons/shooting-star-duotone.svg?v=33b8e89a8c3d4769fceb9759f4336c9b7187d89e272dece1f7be3b7c05cfb8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
