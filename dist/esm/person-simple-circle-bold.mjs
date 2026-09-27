export const name="person-simple-circle-bold";
export const id="dl_c3c9b16f5dee4c71b7a0";
export const url=new URL("../icons/person-simple-circle-bold.svg?v=bceaf5535e280968c4253bb6d1dfdfc22387ce4f0f357764108c10c1689ee1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
