export const name="translate-fill";
export const id="dl_55c595159369155d78e4";
export const url=new URL("../icons/translate-fill.svg?v=6b449ca99391615a3ee0da5d1dbbd995b606bb23785d3221d746c1628f290b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
