export const name="lucid_1-broom";
export const id="dl_58f7625204fb40659eee";
export const url=new URL("../icons/lucid_1-broom.svg?v=2048eda2730b821654117e6eaed6a9a39f10f15b561bcf4482c39f86e0d67e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
