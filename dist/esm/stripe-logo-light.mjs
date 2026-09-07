export const name="stripe-logo-light";
export const id="dl_fc6bb1224d0643a39644";
export const url=new URL("../icons/S/stripe-logo-light.svg?v=a1f388bd32896c0fcff03b1068455b3f790b8e48861db98bffa1781162e95d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
