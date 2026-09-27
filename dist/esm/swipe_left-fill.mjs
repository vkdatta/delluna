export const name="swipe_left-fill";
export const id="dl_e5cd0de50fb180230b46";
export const url=new URL("../icons/swipe_left-fill.svg?v=de233733d71e8d8eab0aae1b7568196d1239cf040c027b6969bbe92940396d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
