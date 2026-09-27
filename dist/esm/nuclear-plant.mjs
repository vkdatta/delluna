export const name="nuclear-plant";
export const id="dl_21820646c1f841ed8464";
export const url=new URL("../icons/nuclear-plant.svg?v=9346eb9313b7e4d3e32892511ab8dc612a4de2a81384e3055fafd9830cd04d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
