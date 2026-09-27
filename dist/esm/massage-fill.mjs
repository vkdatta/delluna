export const name="massage-fill";
export const id="dl_1c6d6079e51af57caa2c";
export const url=new URL("../icons/massage-fill.svg?v=583ea4b5d8420bf36fcf9ca84b5640c615b1268e3900998d1ab42f6b58cc7803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
