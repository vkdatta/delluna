export const name="keyboard_tab-fill";
export const id="dl_d878b4ee8fd540b38743";
export const url=new URL("../icons/K/keyboard_tab-fill.svg?v=3261de69e26fa314314116c883fb18814cbd08fd09e880c82ca881ae65698544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
