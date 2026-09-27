export const name="lucid_1-cooking-pot";
export const id="dl_61aeb7651d2345b795c7";
export const url=new URL("../icons/lucid_1-cooking-pot.svg?v=0b85ca196f9f09b1020ee044834890da3e81c70d3be4b845ffcaf571daa30633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
