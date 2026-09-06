export const name="faders-fill";
export const id="dl_ddb8754b66ef4549a2a2";
export const url=new URL("../icons/faders-fill.svg?v=edd573c9c867b8c35c4614d0f661ecf06c200aafac6f4f496bde540fbb17da18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
