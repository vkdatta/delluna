export const name="capture-fill";
export const id="dl_016ed287352d7780e67c";
export const url=new URL("../icons/capture-fill.svg?v=d53a5d204ed3ed0cf2e7d17fb2f4f3136f2ebaf451ccae4a13319783ad70eca1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
