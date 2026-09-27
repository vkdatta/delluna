export const name="star-of-david-bold";
export const id="dl_d2e64f4e0ace6f7a0b21";
export const url=new URL("../icons/star-of-david-bold.svg?v=6b7c1017db7b45d2c99656508bbd610135610bdaa4300db804297229a0ab6a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
