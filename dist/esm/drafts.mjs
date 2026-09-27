export const name="drafts";
export const id="dl_810732564472cac24ef3";
export const url=new URL("../icons/drafts.svg?v=10a841d972e2412bc44f69ce70211501fb6ecb33cfc4c126a4a10faa0216199b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
