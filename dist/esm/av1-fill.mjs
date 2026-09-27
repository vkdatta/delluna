export const name="av1-fill";
export const id="dl_1c37b021a102f2d939d9";
export const url=new URL("../icons/av1-fill.svg?v=00a1224cd15d7c99625f85417ade3b57744e1552fda01ac87daa9466d0898f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
