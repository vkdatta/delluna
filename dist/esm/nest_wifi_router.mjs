export const name="nest_wifi_router";
export const id="dl_6b7f3f57c4e56a9fcc75";
export const url=new URL("../icons/nest_wifi_router.svg?v=104e2236d56ff41d3b440f4495b75200e5803cf119dc072aa6d553e0951d33eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
