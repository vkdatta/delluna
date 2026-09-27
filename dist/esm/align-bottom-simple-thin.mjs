export const name="align-bottom-simple-thin";
export const id="dl_d62e5a7afb7a464093e1";
export const url=new URL("../icons/align-bottom-simple-thin.svg?v=bd3347c49368bb103217f1335b28d25f928364cb4688a392a14328bb7601aa56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
