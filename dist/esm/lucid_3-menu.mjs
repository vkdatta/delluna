export const name="lucid_3-menu";
export const id="dl_c8908906ec9c4484bdff";
export const url=new URL("../icons/lucid_3-menu.svg?v=9688004757e6fa8c4e3951497658e438dff31c115477757f77f5890a896bbdaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
