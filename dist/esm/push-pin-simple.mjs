export const name="push-pin-simple";
export const id="dl_bf62e3feb1bf4bfc875e";
export const url=new URL("../icons/push-pin-simple.svg?v=0d3026e71ce950b31789aa9a311410421d8f226bc3dedb9e8cc3fc38b376071f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
