export const name="x-thin";
export const id="dl_a9769f933cff4e8cab93";
export const url=new URL("../icons/X/x-thin.svg?v=76f1095af778eedb9fd2836b20fd92ed2ac2aade720e041977aaf42b7783315a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
