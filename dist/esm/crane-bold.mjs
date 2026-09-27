export const name="crane-bold";
export const id="dl_26746ecd48bb4381b05d";
export const url=new URL("../icons/crane-bold.svg?v=d4fc9598a88fc4de88ea589416b419e79905bf47db5c2d88d1f535618b1e7617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
