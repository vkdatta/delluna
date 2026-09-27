export const name="arrow-elbow-left-duotone";
export const id="dl_419cf4fc84c74f3a801b";
export const url=new URL("../icons/arrow-elbow-left-duotone.svg?v=f560d8ebe13b7a3b1742203f6e355316a3678d47973cdc461031f4261a4e1427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
