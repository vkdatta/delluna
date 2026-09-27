export const name="radiology";
export const id="dl_b5b88c47f987c9285740";
export const url=new URL("../icons/radiology.svg?v=cdc59c3ae9be5608b708f7db230eb355a3cfada8335dc96f141c21fa92b58181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
