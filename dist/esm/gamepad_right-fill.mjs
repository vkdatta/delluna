export const name="gamepad_right-fill";
export const id="dl_b5b9daac7766139ea81b";
export const url=new URL("../icons/gamepad_right-fill.svg?v=3152461d091620cf7ad9b55806ab8a24c35b120c5beac3615b489eb6274e1a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
