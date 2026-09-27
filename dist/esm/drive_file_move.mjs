export const name="drive_file_move";
export const id="dl_fa8e7074dc689a2455cc";
export const url=new URL("../icons/drive_file_move.svg?v=f4d41dff3f470f54e162c03195854cf77debd2bafb906781e39532a0b63f1f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
