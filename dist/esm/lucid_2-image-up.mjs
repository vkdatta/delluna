export const name="lucid_2-image-up";
export const id="dl_5d5beb6bbe4a42a2a294";
export const url=new URL("../icons/lucid_2-image-up.svg?v=594caa48f6146954b5995b7d2f2dbfc32d9e445021f449003087c59352aaebe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
