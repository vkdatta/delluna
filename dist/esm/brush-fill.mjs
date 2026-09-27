export const name="brush-fill";
export const id="dl_12fa677763bbb9e361d4";
export const url=new URL("../icons/brush-fill.svg?v=a629801324a9d1350684eb5b3e84cd85c837061b4970ac9d163beaa645c1b60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
