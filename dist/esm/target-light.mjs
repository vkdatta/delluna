export const name="target-light";
export const id="dl_a1606e68c994e6caaa41";
export const url=new URL("../icons/target-light.svg?v=507584e2d9ea1efeeb5b3f7a3f1bd36d7a56552c9b617ce0c5cf02d1bff20b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
