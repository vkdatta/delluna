export const name="exclamation-mark-light";
export const id="dl_b39b746fcbe646bba161";
export const url=new URL("../icons/exclamation-mark-light.svg?v=36d6f55052c42ab6df7e02666e56cf2db3f3dcc1d22ffc1f97155f4733e03c5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
