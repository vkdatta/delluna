export const name="barefoot-fill";
export const id="dl_2e62734a410f4816afbf";
export const url=new URL("../icons/B/barefoot-fill.svg?v=cb8799588b3ddf756228a99dce10561ba0fda06d6bb08ced3ac8af50cedb2909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
