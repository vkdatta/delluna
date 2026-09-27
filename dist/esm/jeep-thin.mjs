export const name="jeep-thin";
export const id="dl_511c670032dc43ef8c58";
export const url=new URL("../icons/jeep-thin.svg?v=4081314c950455ebfc362353e6e4ea33617f8ece1de303768d7ffd16f322d942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
