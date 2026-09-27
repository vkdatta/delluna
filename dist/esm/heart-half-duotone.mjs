export const name="heart-half-duotone";
export const id="dl_b321d81119844a57a5a1";
export const url=new URL("../icons/heart-half-duotone.svg?v=29ec0341fc767df641ef1016bd565feb6b77cb8f79d73c6e6de341ade29f888f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
