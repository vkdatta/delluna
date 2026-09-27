export const name="vinyl-record";
export const id="dl_dcb605e5f75c67faf815";
export const url=new URL("../icons/vinyl-record.svg?v=2bc75c1a6181a2b4068a98b3e2088e46880c5fd553ea9f8dd77314512c4ebe31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
