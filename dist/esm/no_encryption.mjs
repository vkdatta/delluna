export const name="no_encryption";
export const id="dl_f696c4bcd95c42dc8fef";
export const url=new URL("../icons/no_encryption.svg?v=734673d38e07772e0dcf47784f3e18ac8c7f82cc98277619b381d7f34ce22934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
