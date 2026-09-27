export const name="zodiac-cancer";
export const id="dl_bff9ad3980ce448193a0";
export const url=new URL("../icons/zodiac-cancer.svg?v=ef5d7c43b41296cd21d22f7d89b25ad50936716b3f30f97853338b8804cabec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
