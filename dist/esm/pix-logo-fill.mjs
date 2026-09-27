export const name="pix-logo-fill";
export const id="dl_a88cfbcaebbf48f08c01";
export const url=new URL("../icons/pix-logo-fill.svg?v=8b4fc3c759507549b609e8cbfcb03e12aeab9740dc1c5f3cad7c536810bb1775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
