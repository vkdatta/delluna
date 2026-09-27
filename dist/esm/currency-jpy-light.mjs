export const name="currency-jpy-light";
export const id="dl_bb0c305be96e4f728859";
export const url=new URL("../icons/currency-jpy-light.svg?v=c533b274419961e1688f872f3e79078a471c1bb49c7000cc40d2da39deb2ca5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
