export const name="looks_5";
export const id="dl_2ac4931f69b5661b545a";
export const url=new URL("../icons/looks_5.svg?v=cdc08fccd5ac0f7a83f585dc319ec5a84a1732a94cef71b79fe6d1a5efaaffe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
