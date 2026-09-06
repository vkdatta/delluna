export const name="push-pin-slash-light";
export const id="dl_52e6c12c5a1946a4904d";
export const url=new URL("../icons/push-pin-slash-light.svg?v=4eac0ccf6aaf125d892b277d0468cfff5510166bee355a1c6fcf41dfd9f330bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
