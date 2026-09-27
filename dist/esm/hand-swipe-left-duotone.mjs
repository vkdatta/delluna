export const name="hand-swipe-left-duotone";
export const id="dl_22db35def796445ca984";
export const url=new URL("../icons/hand-swipe-left-duotone.svg?v=2a5a400a320cb44f47c818604b0af75877d8c58962c604827f855d7b08afbea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
