export const name="valve";
export const id="dl_7027f6a61ff99a1f7cc6";
export const url=new URL("../icons/valve.svg?v=49ad37a45f85f8ee898927866562a9b84b12de252d9fa9dd18f706c3bdac7da4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
