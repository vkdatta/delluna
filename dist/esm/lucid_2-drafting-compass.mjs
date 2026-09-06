export const name="lucid_2-drafting-compass";
export const id="dl_bd628def0e5f468c9847";
export const url=new URL("../icons/lucid_2-drafting-compass.svg?v=11b532eabe5cce652ffa3ed36145874a59c222ce1cc90f2d9dc6f4b38f39b950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
