export const name="heap_snapshot_large-fill";
export const id="dl_95d24490e0b444fb5cea";
export const url=new URL("../icons/heap_snapshot_large-fill.svg?v=2ebcfc0e5612eece46b619ece6796c732b2f1587c75eedfa870f1874246b9e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
