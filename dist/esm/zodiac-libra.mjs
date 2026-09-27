export const name="zodiac-libra";
export const id="dl_b489d84af8aa4304aa95";
export const url=new URL("../icons/zodiac-libra.svg?v=021952a85c5b1066698c961d71c1166316ecb2726797b0817762300207c65e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
