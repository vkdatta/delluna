export const name="lamp-light";
export const id="dl_9dc3f0241f5f4ce7b406";
export const url=new URL("../icons/lamp-light.svg?v=8d2fff820b8462df5f479e75475ce21b380ab912886a9ac0114f91845ec0841b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
