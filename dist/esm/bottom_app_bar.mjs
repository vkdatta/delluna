export const name="bottom_app_bar";
export const id="dl_db47c056e3cc155b3431";
export const url=new URL("../icons/bottom_app_bar.svg?v=b5b8a43ea68ed3572d9dbcd928596fd6271a515539ddfd1c2463afae1681ddd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
