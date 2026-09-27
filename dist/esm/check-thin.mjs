export const name="check-thin";
export const id="dl_a041fc77ef234e8cb5f9";
export const url=new URL("../icons/check-thin.svg?v=ed50f00c7adfa5368d75513f4a14b86eb090807d101eee504c472a6c687d11fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
