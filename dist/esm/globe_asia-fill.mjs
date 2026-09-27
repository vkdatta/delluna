export const name="globe_asia-fill";
export const id="dl_b5fb7a8f1f19e2391835";
export const url=new URL("../icons/globe_asia-fill.svg?v=c1d63982b45ff88b7a903b480ea234f183e86fc451102820f1bfcc27534a39c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
