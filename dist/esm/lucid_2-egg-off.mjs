export const name="lucid_2-egg-off";
export const id="dl_44423ba8db1e44c388ba";
export const url=new URL("../icons/lucid_2-egg-off.svg?v=3aa82d3d71882d33e9ad830c04a8a7bfebd98f82c294e05ae7eac9cb418ad7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
