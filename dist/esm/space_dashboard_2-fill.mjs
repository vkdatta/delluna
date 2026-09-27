export const name="space_dashboard_2-fill";
export const id="dl_62fdc062defa643fc3d1";
export const url=new URL("../icons/space_dashboard_2-fill.svg?v=04f8c4ebb2b3db607036a768cde8b531813021e418603ff61baf083f5a00d918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
