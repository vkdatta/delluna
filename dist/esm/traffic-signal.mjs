export const name="traffic-signal";
export const id="dl_54f0d818895336ac6fb6";
export const url=new URL("../icons/traffic-signal.svg?v=bccc05f6dd3b6ac6d11850d320008550d4de28a9f77b4eb58d96d6f6afd6c1eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
