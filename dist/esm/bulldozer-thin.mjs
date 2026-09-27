export const name="bulldozer-thin";
export const id="dl_866b0d7eb1f24882aa08";
export const url=new URL("../icons/bulldozer-thin.svg?v=eb413d7a089d38869805e2c249eb408141d64bf5b28d943a0a6f4b4ed6a2aa87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
