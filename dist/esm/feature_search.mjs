export const name="feature_search";
export const id="dl_67c3ff89f9864f97b6c4";
export const url=new URL("../icons/feature_search.svg?v=140bbfd10b1cb48f4140c79153ab2f534f01e5ddfdc35ec26d54564ed1113174",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
