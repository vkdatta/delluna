export const name="airplane-in-flight-duotone";
export const id="dl_aa9c7562968c414bb497";
export const url=new URL("../icons/airplane-in-flight-duotone.svg?v=47f9fab0a92d3d411d15771a74bc4595a667dab2b4f75dd99b6ece782c4cbcf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
