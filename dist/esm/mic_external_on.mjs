export const name="mic_external_on";
export const id="dl_9061a349c2624e23872f";
export const url=new URL("../icons/mic_external_on.svg?v=1c57695c4c3638360b91a778f083a862b0a79a01ec32aca12dcebadcdb0fd67c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
