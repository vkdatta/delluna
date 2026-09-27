export const name="x-thin";
export const id="dl_2bf60013eabb308c3178";
export const url=new URL("../icons/x-thin.svg?v=c2e73c2916c17b4ef1d35263fcb4e0d6b59162e853bfbcfebabc862bd670b879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
