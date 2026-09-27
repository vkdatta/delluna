export const name="avg_time";
export const id="dl_b0b7bdd41801bbd50c51";
export const url=new URL("../icons/avg_time.svg?v=408ba1a4d1856cd9fccd0d381a38666029fffc5e83c09e8143157e899895def2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
