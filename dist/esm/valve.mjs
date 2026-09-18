export const name="valve";
export const id="dl_f1b4e6f40d1f44189f2a";
export const url=new URL("../icons/valve.svg?v=49ad37a45f85f8ee898927866562a9b84b12de252d9fa9dd18f706c3bdac7da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
