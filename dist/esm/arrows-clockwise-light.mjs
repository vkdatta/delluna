export const name="arrows-clockwise-light";
export const id="dl_0bae66c1f61e4b24957a";
export const url=new URL("../icons/arrows-clockwise-light.svg?v=4dacc92e0e8aca72a7d59859c331a6d05687b2d2f3da0eb32c21d7763b6e17ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
