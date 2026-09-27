export const name="mouse_lock";
export const id="dl_e33f3034b7c4a188df5f";
export const url=new URL("../icons/mouse_lock.svg?v=544753b361c2bb77a2e3d85bacd2e6b5793c48d83cf938fa361561b4a9e61baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
