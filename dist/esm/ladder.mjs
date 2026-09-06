export const name="ladder";
export const id="dl_7f7747b376bf4c9fa20b";
export const url=new URL("../icons/ladder.svg?v=10317d9b44af13de26e13ccfde301e15c449c7d5041ea421f4ef0b8889a11617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
