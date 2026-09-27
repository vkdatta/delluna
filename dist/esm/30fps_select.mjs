export const name="30fps_select";
export const id="dl_ae990b8abb3ff702149d";
export const url=new URL("../icons/30fps_select.svg?v=9b587235a019ef5622f7ae6bd2fbbaf51208eaa147653486987d5d76f7cc582b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
