export const name="text-t-slash";
export const id="dl_98680823ae1a2e4573d7";
export const url=new URL("../icons/text-t-slash.svg?v=e754feec389e86a41e901778667bef023bdb4959f4f7c82e1e42c3c7f261d877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
