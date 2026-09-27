export const name="eyedropper-sample-thin";
export const id="dl_ecbee96e88f949a4a16b";
export const url=new URL("../icons/eyedropper-sample-thin.svg?v=39cd9bb615ba54071d5cd9b31f966549d9d0ed41f063e3be2b1e55ab47b76a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
