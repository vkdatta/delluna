export const name="fire-fill";
export const id="dl_84109c3827df4c32a62f";
export const url=new URL("../icons/fire-fill.svg?v=658a12e74d4e121158f21a71ca9031253ad35a0c8ddb86ec03933b3afe9b1786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
