export const name="mobile_unlock";
export const id="dl_c2519384d1f85aa99760";
export const url=new URL("../icons/mobile_unlock.svg?v=101d86b6a76acec987ee4725e014e77d046817ad063facc5298850f355887a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
