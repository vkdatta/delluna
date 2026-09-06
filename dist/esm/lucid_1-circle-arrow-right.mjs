export const name="lucid_1-circle-arrow-right";
export const id="dl_2cca6dcf344848c083c1";
export const url=new URL("../icons/lucid_1-circle-arrow-right.svg?v=a70f4dd6a3f24af7693c255058337e3ed97a331160d96082667602ab04b82ee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
