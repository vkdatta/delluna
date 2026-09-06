export const name="strikethrough";
export const id="dl_1bec68d538c2490daa10";
export const url=new URL("../icons/strikethrough.svg?v=8a85b3b9ba76182f91c421bcbbbbcd103ded686fce53b66fcb48447afba42d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
