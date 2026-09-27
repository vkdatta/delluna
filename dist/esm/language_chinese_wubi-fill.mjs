export const name="language_chinese_wubi-fill";
export const id="dl_94b50141bf8c8908c256";
export const url=new URL("../icons/language_chinese_wubi-fill.svg?v=c62c65c980ff7822fb3c64c80f378d62da1e7d172a65c165d0cf45d3dc21f91c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
