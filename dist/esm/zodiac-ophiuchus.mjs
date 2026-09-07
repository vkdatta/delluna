export const name="zodiac-ophiuchus";
export const id="dl_d77513d028d24757bafa";
export const url=new URL("../icons/zodiac-ophiuchus.svg?v=b61fdb0b29acc361a4f67b992f3843f8a1a581adb9643751564aff27b3719735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
