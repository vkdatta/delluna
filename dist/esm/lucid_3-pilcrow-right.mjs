export const name="lucid_3-pilcrow-right";
export const id="dl_c48607d8e5a14960a476";
export const url=new URL("../icons/lucid_3-pilcrow-right.svg?v=a986b82b2b81a532ef56dd07a3c0bc019094868da2d26b5662156e43e831958b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
