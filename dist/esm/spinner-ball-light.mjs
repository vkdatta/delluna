export const name="spinner-ball-light";
export const id="dl_0d37e97d800a450490ed";
export const url=new URL("../icons/S/spinner-ball-light.svg?v=df7a06d55779f3b8618d1edc329184db948a7296ff302e4b06abc68d2864d820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
