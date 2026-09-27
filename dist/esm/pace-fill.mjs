export const name="pace-fill";
export const id="dl_c752d0a223ca6007a60c";
export const url=new URL("../icons/pace-fill.svg?v=cfbf68a778809178e2ed9b2d471d62bc3166174bd21b57d6ceabb6b310649013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
