export const name="file_copy_off-fill";
export const id="dl_e734df27c998081f31fc";
export const url=new URL("../icons/file_copy_off-fill.svg?v=9cc768c30e8745bf9a8b51ee601e91bdb51dae59bb73291f4579fcc47001233f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
