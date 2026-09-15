export const name="fragrance";
export const id="dl_385fe4f968a440feb109";
export const url=new URL("../icons/F/fragrance.svg?v=c29238e96e7c2b6e71b8ceaaa5626180f6487f8178c779a25347e74a518b6d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
