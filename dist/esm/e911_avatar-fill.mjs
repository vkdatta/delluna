export const name="e911_avatar-fill";
export const id="dl_83c2e974035342baca2d";
export const url=new URL("../icons/e911_avatar-fill.svg?v=fcf11df843931cf12a8cbe722cb1ec7b1bbf9bc2558b79d4768b6bedf795b270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
