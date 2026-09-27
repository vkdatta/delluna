export const name="lucid_1-arrow-big-left";
export const id="dl_b0cbcdcc1f6447e6a26c";
export const url=new URL("../icons/lucid_1-arrow-big-left.svg?v=bb1049e0b361358783999634b550b085d70446bae5691d3afe100bcb58198e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
