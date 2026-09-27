export const name="skip-back-circle-light";
export const id="dl_5699690380ca990cf926";
export const url=new URL("../icons/skip-back-circle-light.svg?v=8059a2d31dd2383056d052455166f052fad4be21bff717dcea6018f7d7defc8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
