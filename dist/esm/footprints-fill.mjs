export const name="footprints-fill";
export const id="dl_4decf7cae97b40aeaa48";
export const url=new URL("../icons/footprints-fill.svg?v=2363bf8f3956ebecef914a6ec2df375cffdd6c0fe18d142e5087f93ef232ecde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
