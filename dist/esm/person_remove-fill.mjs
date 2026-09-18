export const name="person_remove-fill";
export const id="dl_0e67de86a3d54ef984a2";
export const url=new URL("../icons/P/person_remove-fill.svg?v=cae3399faa87dc1e7f45722268affab810803ab76575e8e355808812b7513e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
