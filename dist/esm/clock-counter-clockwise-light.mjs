export const name="clock-counter-clockwise-light";
export const id="dl_4aa29bc20144458499b5";
export const url=new URL("../icons/clock-counter-clockwise-light.svg?v=aad359bea64197b73b0efecc46ceb0efc437984a63187909fe5fc211a3474ca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
