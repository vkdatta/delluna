export const name="gps-fix";
export const id="dl_f8a6121f5e074244ae1c";
export const url=new URL("../icons/gps-fix.svg?v=2a0193c7b7fea290c9c2199b31f37092765faa814687c460d720bfe908350598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
