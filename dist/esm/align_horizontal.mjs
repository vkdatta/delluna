export const name="align_horizontal";
export const id="dl_385a157e63554dbbbac7";
export const url=new URL("../icons/all_60_named_svgs/align_horizontal.svg?v=895f7ef16d0336272f2e5bd1d8b6bceb0ccd171b989996ce526b7492d0739762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
