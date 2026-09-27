export const name="arrow-elbow-left-down-bold";
export const id="dl_5684e0f5c0524fd0b2b8";
export const url=new URL("../icons/arrow-elbow-left-down-bold.svg?v=4e213fee5241237d4a33dbb610eaddb42cc08497ebe59f805c5f3b7cc547f195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
