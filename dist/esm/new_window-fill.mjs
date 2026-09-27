export const name="new_window-fill";
export const id="dl_42bbef594ebf75b4d4c3";
export const url=new URL("../icons/new_window-fill.svg?v=a6c5e55a1990afee464d2dea90cb4caee4e5c426b0b6c5fefdf2d0c8a95b70f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
