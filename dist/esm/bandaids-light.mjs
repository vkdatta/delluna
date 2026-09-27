export const name="bandaids-light";
export const id="dl_9351000f705f42a5aeea";
export const url=new URL("../icons/bandaids-light.svg?v=ec1ce9c9c77048f9a665e25308d9d36824d252d16c1c7d96184feb73bf68fe03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
