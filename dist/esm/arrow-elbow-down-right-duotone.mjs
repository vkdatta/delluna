export const name="arrow-elbow-down-right-duotone";
export const id="dl_ede73f7a7ebf40dc9393";
export const url=new URL("../icons/arrow-elbow-down-right-duotone.svg?v=451c9d5c9a78ad46a9596dfd1fcf41946bffe18c249aee7846cf32938be9d09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
