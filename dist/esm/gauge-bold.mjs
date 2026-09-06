export const name="gauge-bold";
export const id="dl_e6d8b2f0b4c040ae8fe6";
export const url=new URL("../icons/gauge-bold.svg?v=8d47ee3b13880836ba5659a8e2fe5dfc7094b8a6403d99284f21f5fd21113b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
