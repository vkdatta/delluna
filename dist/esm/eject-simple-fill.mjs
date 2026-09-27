export const name="eject-simple-fill";
export const id="dl_e7e0953d05dc42c18b5e";
export const url=new URL("../icons/eject-simple-fill.svg?v=2fb38075462ddf438d6087a20475e85f905596719e0969870c7463c145f1276d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
