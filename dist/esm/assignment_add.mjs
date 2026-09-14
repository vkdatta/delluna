export const name="assignment_add";
export const id="dl_af144f2c2a3a44ef98a9";
export const url=new URL("../icons/A/assignment_add.svg?v=7bfee5d6c874587f1e77fee3a5a01c06b449f7b3d8a1a088849f008a6e3149fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
