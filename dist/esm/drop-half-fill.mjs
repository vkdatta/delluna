export const name="drop-half-fill";
export const id="dl_05a56e16598e4142ac63";
export const url=new URL("../icons/drop-half-fill.svg?v=2816a2a586396396d46de10c1fd9bed16d74fd0ab2907e3e61adf521920aa840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
