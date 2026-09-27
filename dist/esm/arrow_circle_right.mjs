export const name="arrow_circle_right";
export const id="dl_8942121cf253d7d15ad6";
export const url=new URL("../icons/arrow_circle_right.svg?v=35c60c8ebe66dc6d6270863ff3500c04bba33536c4b9082273fd671f0158297d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
