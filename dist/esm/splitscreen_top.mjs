export const name="splitscreen_top";
export const id="dl_2ca3d9aa0a2bacdd5ebe";
export const url=new URL("../icons/splitscreen_top.svg?v=9bd6ed0adf26613d0c2a30a849b79263dd2f5d2873162d80ae1f2b615801fd59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
