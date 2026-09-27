export const name="bolt_boost";
export const id="dl_758957a5f5fd65a15bd1";
export const url=new URL("../icons/bolt_boost.svg?v=28c7519ef1a11516a3960c9ba784cd4434a96a3520defa2a449cb8ac568659b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
