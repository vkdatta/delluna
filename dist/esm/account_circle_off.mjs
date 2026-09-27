export const name="account_circle_off";
export const id="dl_a4a5ff5750d45e5480f7";
export const url=new URL("../icons/account_circle_off.svg?v=244251ff1c0f6df742e819533d0ab6179679808224f6c2d72d514618561ffd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
