export const name="language_us_colemak-fill";
export const id="dl_982a2742604e40b482c3";
export const url=new URL("../icons/L/language_us_colemak-fill.svg?v=243564f4896b3356eaa5f7cd95fb6739ca4774bffc34d55c0857456f55d54982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
