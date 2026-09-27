export const name="union-fill";
export const id="dl_e031641eb195d17a4b51";
export const url=new URL("../icons/union-fill.svg?v=4f63deded179c68afa4576cd4e8084b2e64a1e76d300c5a1416ebaaa95917e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
