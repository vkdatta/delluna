export const name="eyedropper-sample-thin";
export const id="dl_ecbee96e88f949a4a16b";
export const url=new URL("../icons/eyedropper-sample-thin.svg?v=73c272d66a6d629c323d836490a0b2695d714041247221ec1d453ad06ab99001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
