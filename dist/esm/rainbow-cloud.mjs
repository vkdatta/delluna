export const name="rainbow-cloud";
export const id="dl_a9ef77cb739a4c9ab512";
export const url=new URL("../icons/rainbow-cloud.svg?v=a4bde1b1d2a9b759fbb92addab0443ae1ff0215f01980cda2c95d6b6f2f28ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
