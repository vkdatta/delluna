export const name="paperclip-horizontal";
export const id="dl_a2f04ff39ca24e638d87";
export const url=new URL("../icons/paperclip-horizontal.svg?v=76a60d17d1035dd691316d33e931f06d9e0cc620cd295dc18cb687b1af56327f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
