export const name="text-t-slash-thin";
export const id="dl_20ef2d2f68b09b2ab68c";
export const url=new URL("../icons/text-t-slash-thin.svg?v=3831e92d386c6549d874eb31c73c81536b6148bf3019086339443363fe9d7c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
