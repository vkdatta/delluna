export const name="toilet-light";
export const id="dl_7b932dec871048348d3e";
export const url=new URL("../icons/T/toilet-light.svg?v=c08b2465c2ac1e8d824874e96ad4021dcd5a0b725acaeddd1515c4724d30ca40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
