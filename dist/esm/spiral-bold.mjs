export const name="spiral-bold";
export const id="dl_5d96fdc372fb36b9cd5b";
export const url=new URL("../icons/spiral-bold.svg?v=ce87849c683b0cc1eeec3f8d5c309e435fc328f9d865928b3aa485af89d8fb95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
