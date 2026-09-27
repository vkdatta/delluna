export const name="sign_language_off";
export const id="dl_c4d2a89814d50f7f177f";
export const url=new URL("../icons/sign_language_off.svg?v=c91576ccdcce5f2e6e6500e04cfacaec945b7c70018ed12f110081919fd8b771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
