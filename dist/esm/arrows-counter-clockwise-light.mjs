export const name="arrows-counter-clockwise-light";
export const id="dl_451f30189dd24163aee0";
export const url=new URL("../icons/arrows-counter-clockwise-light.svg?v=b47f65ee579fbdc6c2934e83d4a601b49023512707ad7504ad1f1addf29ebed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
