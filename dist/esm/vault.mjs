export const name="vault";
export const id="dl_c4b593a6306144c38da6";
export const url=new URL("../icons/vault.svg?v=2fd1b740d8a15db76cdffe4d7f268918753326b5fec1f8d2bcad4dc49606625f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
