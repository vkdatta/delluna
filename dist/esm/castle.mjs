export const name="castle";
export const id="dl_75073401b63071e30657";
export const url=new URL("../icons/castle.svg?v=9b2654234201a715a058127598d25624dc11037f284ed8701923a84b667ac667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
