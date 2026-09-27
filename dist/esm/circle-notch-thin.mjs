export const name="circle-notch-thin";
export const id="dl_585b1a72b4414f9083a8";
export const url=new URL("../icons/circle-notch-thin.svg?v=980ab8f0ce4c4ad75ffd79669b939a291351d25a811a7e627f1f9e8fa8efbea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
