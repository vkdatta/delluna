export const name="square-stack";
export const id="dl_24ae6fbffa664b10b868";
export const url=new URL("../icons/square-stack.svg?v=e47c5306f973d468598630f90a99f548e776cb395da1c1d10acc9ccdd4713a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
