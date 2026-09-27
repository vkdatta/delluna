export const name="microsoft-outlook-logo-duotone";
export const id="dl_2621ae5e65034bb081cf";
export const url=new URL("../icons/microsoft-outlook-logo-duotone.svg?v=1cacfacd52fa159d0886b036d1b6b0aed6ec4bca576cb027f7a2d65eeca1ad6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
