export const name="jar";
export const id="dl_6e0e541cb5de4c50b21e";
export const url=new URL("../icons/jar.svg?v=84f5f475ac05e2b2f6c3c05ddeac812d55855b2e71b2d4406ee029902be85b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
