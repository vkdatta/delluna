export const name="lucid_2-corner-right-up";
export const id="dl_435112906d81472690de";
export const url=new URL("../icons/lucid_2-corner-right-up.svg?v=a87553554ab8f129e498db0c6c41bc6954d713ba683a2692aa2f74e0605a9cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
