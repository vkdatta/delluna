export const name="page_menu_ios-fill";
export const id="dl_886c77549ca2512cd898";
export const url=new URL("../icons/page_menu_ios-fill.svg?v=6e496a79b8476f81412a77a9be63c9bf3186c011f35b7ebbd383cc2d9fa1a3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
