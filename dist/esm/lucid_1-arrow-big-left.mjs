export const name="lucid_1-arrow-big-left";
export const id="dl_b0cbcdcc1f6447e6a26c";
export const url=new URL("../icons/lucid_1-arrow-big-left.svg?v=aab539a5b4f3ade8d8ff43b56a14c233d32224d81d9fbc24188adee2f3025f42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
