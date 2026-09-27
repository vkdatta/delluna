export const name="lucid_2-layout-dashboard";
export const id="dl_49fed57dc73f48a2a7f1";
export const url=new URL("../icons/lucid_2-layout-dashboard.svg?v=eb80a212960578d75f2ccb9ddba75577d83c8032757d3c270ab4296dd07729e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
