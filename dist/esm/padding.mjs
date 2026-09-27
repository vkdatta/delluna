export const name="padding";
export const id="dl_0cba520c4c9b42469029";
export const url=new URL("../icons/padding.svg?v=224b3ad411eea2b255a1bea7d46a0ffdd8bba8466821376752714a9b274fc8b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
