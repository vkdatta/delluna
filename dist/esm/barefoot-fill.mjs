export const name="barefoot-fill";
export const id="dl_9d2a336f90d12fe4c49c";
export const url=new URL("../icons/barefoot-fill.svg?v=cb8799588b3ddf756228a99dce10561ba0fda06d6bb08ced3ac8af50cedb2909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
