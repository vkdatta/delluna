export const name="widget_menu";
export const id="dl_46f3f841117c47b12241";
export const url=new URL("../icons/widget_menu.svg?v=7ac385f9e53c01ba0f19a20d78346167df35f4bbd1ccdc4b0e17e20fb886092d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
