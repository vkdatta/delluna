export const name="panorama_vertical-fill";
export const id="dl_baa1b9562ba9d4e7c487";
export const url=new URL("../icons/panorama_vertical-fill.svg?v=7f255e442861827767681d80bb218432a72d11e7d36261ec13fd6692aa3e79a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
