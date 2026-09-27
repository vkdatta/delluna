export const name="checklist";
export const id="dl_1ce1040b2e9dbc22234b";
export const url=new URL("../icons/checklist.svg?v=9a7f737c264455b525984d5da5af6fafe3d856119df3fe1f9f4e229c7bd07d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
