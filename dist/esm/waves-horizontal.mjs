export const name="waves-horizontal";
export const id="dl_99504ee65e1d456e892a";
export const url=new URL("../icons/waves-horizontal.svg?v=e037b038f7b10fef866ae78a118af018f18c4b2f3c12f8b72aac8b2ec6804338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
