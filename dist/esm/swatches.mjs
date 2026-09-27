export const name="swatches";
export const id="dl_7eb9dec8ff9e1e221f95";
export const url=new URL("../icons/swatches.svg?v=952904efe4b1c530f7de9ca12344276be6e787d935348e29efa1a04231696ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
