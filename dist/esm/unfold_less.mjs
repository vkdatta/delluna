export const name="unfold_less";
export const id="dl_8585a8e9fa572df7baa2";
export const url=new URL("../icons/unfold_less.svg?v=8dbb4c0d637f971bb56ba92f7afe62057ae6ec8642aa27a023616a95ffc98cca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
