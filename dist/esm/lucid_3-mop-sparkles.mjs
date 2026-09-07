export const name="lucid_3-mop-sparkles";
export const id="dl_f85f787cc94b4be5a75e";
export const url=new URL("../icons/lucid_3-mop-sparkles.svg?v=df15707b7401cc1a4db807a97fdeb94d375dd229b26b686e756b46ccff7beb12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
