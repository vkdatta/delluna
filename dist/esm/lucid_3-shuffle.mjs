export const name="lucid_3-shuffle";
export const id="dl_1d5e4a99a6084bb086e9";
export const url=new URL("../icons/lucid_3-shuffle.svg?v=58f9e1409dac82a6bcf1760fabe1761a768b04274be64bde93f71e06d2fafac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
