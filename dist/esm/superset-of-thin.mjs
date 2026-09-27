export const name="superset-of-thin";
export const id="dl_b641c356f277546dc8c8";
export const url=new URL("../icons/superset-of-thin.svg?v=b63a2d2a74e31f41f50f3f114239fb8c86056be018fba946d7cdd2ad78d9a1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
