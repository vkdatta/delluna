export const name="shield_moon";
export const id="dl_0cc1abdc961df41e3368";
export const url=new URL("../icons/shield_moon.svg?v=bca8c6ec576b70186af0a5a40a2adcb9e5fe28dc2160b1a5ed6709b7d6d4aee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
