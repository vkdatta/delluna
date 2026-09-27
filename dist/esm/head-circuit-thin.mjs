export const name="head-circuit-thin";
export const id="dl_3ec487d86cd54fe18400";
export const url=new URL("../icons/head-circuit-thin.svg?v=d4700369352f4ccc157286c6d6eb61a21562db77b978ec695097200c122143d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
