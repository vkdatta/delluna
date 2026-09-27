export const name="colorize";
export const id="dl_1000e425b2b351e03dfc";
export const url=new URL("../icons/colorize.svg?v=e25d0a8d9f0ac0bb227e22f2920726cd19fbcde5c932f4d7ebcba154c18b65e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
