export const name="how_to_reg-fill";
export const id="dl_e9dc6930c48dcb9d9799";
export const url=new URL("../icons/how_to_reg-fill.svg?v=d41176965ba6cb411ba798435c329932fa3ec1543e2dde4b5f3425dd7cd92509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
