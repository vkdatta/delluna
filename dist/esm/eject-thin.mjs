export const name="eject-thin";
export const id="dl_9b7514e3987f40ad9025";
export const url=new URL("../icons/eject-thin.svg?v=21795202475ffc4a5594f1a1e058c929e7c69d641f5fc13932b603509b423924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
