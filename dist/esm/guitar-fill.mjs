export const name="guitar-fill";
export const id="dl_7084c5a0b58f43e98539";
export const url=new URL("../icons/guitar-fill.svg?v=3a166a7b663a549eeec7b2c1a70e9983358420e5f4593061432e4813534b6319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
