export const name="number-square-zero-light";
export const id="dl_8ece224898304ecbbaa6";
export const url=new URL("../icons/number-square-zero-light.svg?v=00d0d7e5ebd05798161336e70cab4f074f32c32bff98582db7baab72f4b42879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
