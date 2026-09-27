export const name="lucid_3-scan-line";
export const id="dl_7124eea1b2374f99b223";
export const url=new URL("../icons/lucid_3-scan-line.svg?v=3eb8c19a526f048b4713f432d659a1d8d0db91000a0e83b21ca741b016f8828f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
