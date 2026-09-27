export const name="chat-fill";
export const id="dl_d2258cfdf6d3427a9529";
export const url=new URL("../icons/chat-fill.svg?v=97a7b0c1788b9b3147f166b3fed0a1b8f30f4f550e4147099417bcba6ddae236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
