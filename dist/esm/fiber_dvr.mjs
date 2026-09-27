export const name="fiber_dvr";
export const id="dl_fd6c28111bbcc82d3a2c";
export const url=new URL("../icons/fiber_dvr.svg?v=31a06acf28a861149ff6681d66b3ba74cc081f494e689517f28c4ebbddc57796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
