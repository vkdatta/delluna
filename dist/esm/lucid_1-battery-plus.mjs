export const name="lucid_1-battery-plus";
export const id="dl_3becbeb0610441c4bf93";
export const url=new URL("../icons/lucid_1-battery-plus.svg?v=ab36bd164bfd6e895de0d1c857f9552e698ec0db18391e86e935293a96c87fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
