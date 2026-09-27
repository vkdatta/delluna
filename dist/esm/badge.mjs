export const name="badge";
export const id="dl_81f1d0f5b7cbc8494006";
export const url=new URL("../icons/badge.svg?v=90b0bd4437bf5158ff91f5c130ec3631f35388bc1e8e51610937ce6dcff69862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
