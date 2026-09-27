export const name="text_ad_off-fill";
export const id="dl_2f1b58c1568ecb2cfbd9";
export const url=new URL("../icons/text_ad_off-fill.svg?v=b29e6c236b92a55afd00e80b21881adc7ce0e8cd46f905dc23b20ae37846d483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
