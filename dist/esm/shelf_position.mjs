export const name="shelf_position";
export const id="dl_308da1aa1f5149eea801";
export const url=new URL("../icons/shelf_position.svg?v=95934cd92b08521d5b577fc181e3a04206a24b562affb1254f185f5ed023ba9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
