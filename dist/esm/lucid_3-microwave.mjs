export const name="lucid_3-microwave";
export const id="dl_fb9ae321575142fc9066";
export const url=new URL("../icons/lucid_3-microwave.svg?v=6c1ef72fe9631a9e6f367e0da0639632dbe80f8321430ffb5de8a1cd28a51d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
