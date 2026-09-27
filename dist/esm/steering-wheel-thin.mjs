export const name="steering-wheel-thin";
export const id="dl_564b7097cd3e49ec6706";
export const url=new URL("../icons/steering-wheel-thin.svg?v=37dcc33745e40e137492be576c10d8e4942e69726993b0dec8dd83035f5f0f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
