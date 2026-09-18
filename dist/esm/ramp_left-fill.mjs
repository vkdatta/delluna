export const name="ramp_left-fill";
export const id="dl_a71aa208adea4ee1a28c";
export const url=new URL("../icons/ramp_left-fill.svg?v=e303b1e5bdf90db1a1bfd223657c083e539e63ee785494371ab7da918fccef95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
