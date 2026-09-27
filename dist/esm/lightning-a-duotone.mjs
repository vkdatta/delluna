export const name="lightning-a-duotone";
export const id="dl_a942935e330a43f88601";
export const url=new URL("../icons/lightning-a-duotone.svg?v=7234d8a9869192c2953720c8889414466b998107ffcfaa67c38c74bc8ea97b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
