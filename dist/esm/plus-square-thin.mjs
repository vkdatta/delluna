export const name="plus-square-thin";
export const id="dl_0984ae8854f849d09b5e";
export const url=new URL("../icons/plus-square-thin.svg?v=6b219df6197471b317ceb7d0981adbf72845ef5a776df420ee749124128847e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
