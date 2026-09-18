export const name="edit_attributes-fill";
export const id="dl_3a3743a8b87b4eb397ae";
export const url=new URL("../icons/edit_attributes-fill.svg?v=165c5604fa5f8b21e26c78e0d4cf5ed8ff6116db57f57899731fdf8b55499fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
