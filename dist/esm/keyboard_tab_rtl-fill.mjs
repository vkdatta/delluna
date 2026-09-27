export const name="keyboard_tab_rtl-fill";
export const id="dl_1b6266c3e79df1a94b41";
export const url=new URL("../icons/keyboard_tab_rtl-fill.svg?v=6d266d371d396b970988b3a26df9fc8d6a1f20dd28ea169190936d7c104aefab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
