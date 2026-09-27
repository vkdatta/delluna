export const name="arrow-elbow-down-left-duotone";
export const id="dl_499a8427948b4e5ebe51";
export const url=new URL("../icons/arrow-elbow-down-left-duotone.svg?v=9ff59aa4c71be8b616d436fd3acff85f1b2c6af6a9830cc914463731689e9fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
