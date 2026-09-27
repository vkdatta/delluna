export const name="pageless-fill";
export const id="dl_5bbeb72f8b5ef00caac0";
export const url=new URL("../icons/pageless-fill.svg?v=e52fb227832a6fe4fd0b80935838e9f61f9f1e6254e2ff8ba3a3363a5fc13abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
