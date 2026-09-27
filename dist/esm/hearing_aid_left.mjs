export const name="hearing_aid_left";
export const id="dl_0fc8f45c0e1640ee312c";
export const url=new URL("../icons/hearing_aid_left.svg?v=0edd058300a1cc6c6a6ab2cc549ebb70467ecd30c5ae8c888f1dc639d34c1fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
