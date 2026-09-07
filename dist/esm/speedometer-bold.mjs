export const name="speedometer-bold";
export const id="dl_969561351f92439cb882";
export const url=new URL("../icons/S/speedometer-bold.svg?v=976bd69d5d8eca336237d7bdb5e27447922a5969044d603e6570487195158d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
