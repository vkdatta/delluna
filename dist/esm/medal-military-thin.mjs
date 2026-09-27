export const name="medal-military-thin";
export const id="dl_5261579b861044f09694";
export const url=new URL("../icons/medal-military-thin.svg?v=3714a14ceefda4a91c66e3574f257939e22b5b3e264dc48388722355a3345a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
