export const name="lucid_1-closed-caption";
export const id="dl_8903e1963d664ab6afdc";
export const url=new URL("../icons/lucid_1-closed-caption.svg?v=24b5d83f813bb69a404708da05448b8bc50fdb25ab292b31f924979ad1561134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
