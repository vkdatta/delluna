export const name="escalator-fill";
export const id="dl_129477b03886c8ca02e1";
export const url=new URL("../icons/escalator-fill.svg?v=f6cb9dfdc70a7df5662e8404dff0f558915d4fa69619d8100216aaebc1036476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
