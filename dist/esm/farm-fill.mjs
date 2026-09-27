export const name="farm-fill";
export const id="dl_35d7718d37864785af29";
export const url=new URL("../icons/farm-fill.svg?v=7e11c384029b39026af79ca00a02fd4ac4b49e1eca1efcb4643ca2004a60c01d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
