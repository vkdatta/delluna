export const name="projector-screen-bold";
export const id="dl_5d33df8876744ae6a813";
export const url=new URL("../icons/projector-screen-bold.svg?v=5a2d1d2ca9de2dd5271ded27bce7501cffa667b7f7a0f0367bb70bbd969230ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
