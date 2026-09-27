export const name="circle-half-thin";
export const id="dl_e53dd17e34494918898d";
export const url=new URL("../icons/circle-half-thin.svg?v=cd468976e5f3a0afa76be249baec6e999190f80bf646be2c478856fb1c70d796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
