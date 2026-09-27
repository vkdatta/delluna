export const name="assignment_globe-fill";
export const id="dl_44f2d4fb1a8b791612b1";
export const url=new URL("../icons/assignment_globe-fill.svg?v=6f2821d4a69f1a722d7e622f5a2b71cf02108b51e96984d15e3737499d25603a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
