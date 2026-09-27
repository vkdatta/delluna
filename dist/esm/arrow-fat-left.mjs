export const name="arrow-fat-left";
export const id="dl_7b8c5e66ac3e499388be";
export const url=new URL("../icons/arrow-fat-left.svg?v=55dfb344f1325861c35b54003a4ce67c125c61a6d81e7232318f60fc6a11c981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
