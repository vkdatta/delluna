export const name="currency_rupee_circle";
export const id="dl_47b2ff190743459174c6";
export const url=new URL("../icons/currency_rupee_circle.svg?v=26385e512b0ae634dcb9d9681b52a20abf6a0c2efe9155d24f81a0cd2ffbb441",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
