export const name="subtitles-thin";
export const id="dl_6fe8787743c24f90a7af";
export const url=new URL("../icons/S/subtitles-thin.svg?v=aa99a2f78874c4f0256e872e8b273a723245be15bd13a2c3cc59ea684aa484e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
