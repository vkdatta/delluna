export const name="box";
export const id="dl_64e7878c0f9347a1bd77";
export const url=new URL("../icons/box.svg?v=32ee763ed677fcad973f6de79dc19b90c6d7b0dc8a746d9eac43cbcb0f0fb0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
