export const name="nest_cam_floodlight";
export const id="dl_d9ad9ee47a80c215d7c3";
export const url=new URL("../icons/nest_cam_floodlight.svg?v=327f756e89ecdd122d20f0db8890f5e6e776dfa6c6920ac55590049a15b83ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
