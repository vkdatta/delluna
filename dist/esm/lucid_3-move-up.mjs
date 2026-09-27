export const name="lucid_3-move-up";
export const id="dl_97651828110d4c5a8285";
export const url=new URL("../icons/lucid_3-move-up.svg?v=950f49e67744f85cd7eacd4091cf92efa6a6215cbb20589ad68713aa5026589d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
