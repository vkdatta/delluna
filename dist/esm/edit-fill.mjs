export const name="edit-fill";
export const id="dl_cbb5340b386c4bc786cf";
export const url=new URL("../icons/E/edit-fill.svg?v=15252c5e1c014a911cb96e18994a6887bc40265992b8d370ee80e167900f18d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
