export const name="arrow_menu_close";
export const id="dl_09b2401216a291d703a2";
export const url=new URL("../icons/arrow_menu_close.svg?v=6c3d6954c266871738db4458dbe19f0ce715b0bcf4746a89fbf1dd05d01c6afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
