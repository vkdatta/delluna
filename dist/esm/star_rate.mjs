export const name="star_rate";
export const id="dl_76e220051fd886e0faef";
export const url=new URL("../icons/star_rate.svg?v=375c9e4c6ec072d4c4c38a147e04da145247b6ea746ef18d14f02e80bfa5f90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
