export const name="page_menu_ios-fill";
export const id="dl_50ebcc339ff64ab0269a";
export const url=new URL("../icons/page_menu_ios-fill.svg?v=00cf2a47ea6cfa6a15247b77d4ba6ef92c1eb6c143a8d84c56793740d1acf592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
