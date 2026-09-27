export const name="poker-chip-light";
export const id="dl_d7311141a0564f69ba0e";
export const url=new URL("../icons/poker-chip-light.svg?v=07f9c8b6184cc553083851f928a5c162148d74a20c65d7690a43e8c44907bb36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
