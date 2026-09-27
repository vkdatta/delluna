export const name="flip-vertical-light";
export const id="dl_df7a9e1514d14a00bd6e";
export const url=new URL("../icons/flip-vertical-light.svg?v=d6f63822c8d45a4955a9ff165c3d6dcaa3bcbdeb24df8f5444f04574f380ebac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
