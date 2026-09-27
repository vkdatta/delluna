export const name="toll-fill";
export const id="dl_bb32490e3ce8c69186bf";
export const url=new URL("../icons/toll-fill.svg?v=03eef364dfef30f864d618e3522abb0f827e0f47fc4b8bd85bcdaa6b5c085114",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
