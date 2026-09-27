export const name="gear-light";
export const id="dl_b474020b68734c1ca7e3";
export const url=new URL("../icons/gear-light.svg?v=59b1a450e455b23a54771602d1a7a3b96c580a0dea151c2d679db5f373cacc2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
