export const name="cooking-pot-fill";
export const id="dl_a54a5750841b478fa896";
export const url=new URL("../icons/cooking-pot-fill.svg?v=d17d48678666c48143ee621387d5eb1fa6589b74dc31110e3c01cf1664160748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
