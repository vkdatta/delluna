export const name="note_add-fill";
export const id="dl_58ac3112c907a06b80ba";
export const url=new URL("../icons/note_add-fill.svg?v=aed6b45829405c52f2e1e1beaf24bee62150590972e04eed8c0ba8c842f880b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
