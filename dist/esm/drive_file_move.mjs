export const name="drive_file_move";
export const id="dl_fbe758f559208dd54510";
export const url=new URL("../icons/drive_file_move.svg?v=b46f4b5cd4cd576977fdf7cdcc6617e72ab41a9b58a8e60b2630856e11aec17f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
