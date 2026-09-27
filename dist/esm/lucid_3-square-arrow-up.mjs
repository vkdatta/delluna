export const name="lucid_3-square-arrow-up";
export const id="dl_12855b01c5fc4af08446";
export const url=new URL("../icons/lucid_3-square-arrow-up.svg?v=0b5144d2e83ecc0ea97f7c812d811082cd2f09d15b76dab93d82068f66e45cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
