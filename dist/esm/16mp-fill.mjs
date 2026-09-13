export const name="16mp-fill";
export const id="dl_e7bd492f47ca450eb9d4";
export const url=new URL("../icons/1/16mp-fill.svg?v=d3552a3a7d21802e544ed149522648a3fd971cee406570faa6dde7519c7c7b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
