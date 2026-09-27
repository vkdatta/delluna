export const name="selection-slash";
export const id="dl_945d00695fd4dae98ac1";
export const url=new URL("../icons/selection-slash.svg?v=db197f3c6ba8878b78fc8edd6170fb681a7d227219601f1e45ffc273b4004ce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
