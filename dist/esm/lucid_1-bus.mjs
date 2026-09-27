export const name="lucid_1-bus";
export const id="dl_345d053e01c344e4871a";
export const url=new URL("../icons/lucid_1-bus.svg?v=b4a55d5f182954dad284139c4b2724d58b1a2b3e86c436809002aabe63bec9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
