export const name="bottom_panel_close-fill";
export const id="dl_fe3f00d8faebc28fe4ec";
export const url=new URL("../icons/bottom_panel_close-fill.svg?v=b5bbed8439c2818a61c497d80c15e2ac428ef3d98b59af42ff528adee3c656d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
