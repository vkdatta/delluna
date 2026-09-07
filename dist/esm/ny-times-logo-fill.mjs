export const name="ny-times-logo-fill";
export const id="dl_d5212f533e214e069c9e";
export const url=new URL("../icons/ny-times-logo-fill.svg?v=56b7f10f80027b8b363bdca03d7936ce9d59e2e4ed59cd61b474ee45d25c39a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
