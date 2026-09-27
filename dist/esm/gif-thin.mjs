export const name="gif-thin";
export const id="dl_6b8000722b384f8fbff6";
export const url=new URL("../icons/gif-thin.svg?v=2dde06c28176d547cbf4d2885bb024814064eb79414116ad961bd4d335549591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
