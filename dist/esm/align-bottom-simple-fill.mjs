export const name="align-bottom-simple-fill";
export const id="dl_b941c5bef1864f5486db";
export const url=new URL("../icons/align-bottom-simple-fill.svg?v=022fed4c16e56694c408734c895fef64186d8768eb0a4441824480a68030b363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
