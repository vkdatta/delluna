export const name="number-two";
export const id="dl_7f9c38c9f78043768fee";
export const url=new URL("../icons/number-two.svg?v=1b2a5d17b03259d9697be47b1d594257d22b83ae298b435009c9e9972b685515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
