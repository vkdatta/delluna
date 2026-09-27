export const name="phone-slash-light";
export const id="dl_3c015dc26d044bc9b5d2";
export const url=new URL("../icons/phone-slash-light.svg?v=3d041521d2b8a0c8f96db269348ce9288866f4c3041700a00af623a6e24e28bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
