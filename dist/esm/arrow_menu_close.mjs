export const name="arrow_menu_close";
export const id="dl_dd849eb6d46a1b49dd09";
export const url=new URL("../icons/arrow_menu_close.svg?v=d1a8c92b5d53183d4d9478e353de2833b5e50f2875a011a7eaa7b510fd3a160b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
