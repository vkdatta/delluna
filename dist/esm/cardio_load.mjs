export const name="cardio_load";
export const id="dl_af5c15e2d0bd2ee69132";
export const url=new URL("../icons/cardio_load.svg?v=9a1e8dd307f0d325fdd479da06d8ec84b25c21b8dd6cc01ee347193dbc05396c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
