export const name="settings";
export const id="dl_d5a7ea89c538d24fc95a";
export const url=new URL("../icons/settings.svg?v=1953c6c0a240e12d9871c51a363befd37436e1f2c296b561d0305aea5be41618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
