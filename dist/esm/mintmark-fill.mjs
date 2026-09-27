export const name="mintmark-fill";
export const id="dl_9e695eb41ca0524b3305";
export const url=new URL("../icons/mintmark-fill.svg?v=4a5d96a14e8ab5240b507c8e28118f7cb6027f9987bb71091a19deac428c2be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
