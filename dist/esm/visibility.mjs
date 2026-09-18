export const name="visibility";
export const id="dl_b3fd0d846a614cf6a84a";
export const url=new URL("../icons/V/visibility.svg?v=e93f1269464381237301c9c8bc40cc25f27bcedc17069370181eb2fb697d9da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
