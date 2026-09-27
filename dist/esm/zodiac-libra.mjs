export const name="zodiac-libra";
export const id="dl_b489d84af8aa4304aa95";
export const url=new URL("../icons/zodiac-libra.svg?v=ebca02d20f8d2826f769629939b26e77ac22d3a6146fe646a5658d1f57bf9c2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
