export const name="star-four-duotone";
export const id="dl_bf242b2e843efdaf43a8";
export const url=new URL("../icons/star-four-duotone.svg?v=7a7d2e6e34960f243495bf414411758dd9507ce166b67b738e9685f9c5ab13ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
