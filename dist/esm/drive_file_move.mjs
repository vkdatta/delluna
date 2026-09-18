export const name="drive_file_move";
export const id="dl_99ee2d7003be44a69bd5";
export const url=new URL("../icons/drive_file_move.svg?v=73b04e5bd46770db9ed5b35fdb68be44d6500563220982fcc552a1f09dca6c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
