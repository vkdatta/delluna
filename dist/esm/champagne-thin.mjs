export const name="champagne-thin";
export const id="dl_cb816a0021d44b6996e7";
export const url=new URL("../icons/champagne-thin.svg?v=29c0a0491273bee21c0d2224671c2764b64df6c4748bff6f28da5606d92ca76a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
