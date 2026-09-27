export const name="brick";
export const id="dl_3e214e96bf5c3e65c73e";
export const url=new URL("../icons/brick.svg?v=751f62eb6ecc0f39ef6e912ef823200e0567c8401d393017d89cb3b606ee58cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
