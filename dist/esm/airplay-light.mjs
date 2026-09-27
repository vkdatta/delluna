export const name="airplay-light";
export const id="dl_c4610438a8834fa4bbf1";
export const url=new URL("../icons/airplay-light.svg?v=dfb26fc1f853b2631b89b1e8f4febb1756ce8b906f36586654f73a4d074101f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
