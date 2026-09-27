export const name="lucid_2-door-open";
export const id="dl_ff73ef87428545d18d0c";
export const url=new URL("../icons/lucid_2-door-open.svg?v=adecb653faf631f45ba6ad45775af969f2d3f19657d22f6b51d619e57f1dd397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
