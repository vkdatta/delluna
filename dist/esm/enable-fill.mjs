export const name="enable-fill";
export const id="dl_5408e77adbb147678936";
export const url=new URL("../icons/enable-fill.svg?v=3075a122a07ba73763e54ec375d5fa07e65a26c7ddb69d6a5358279ac8736ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
