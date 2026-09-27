export const name="gamepad";
export const id="dl_b3fa85e36a1576acd0e3";
export const url=new URL("../icons/gamepad.svg?v=8381fbe4daececdac78ed7f393e8b2df82d7719b0846d09aae49c6e6d2352223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
