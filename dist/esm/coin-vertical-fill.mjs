export const name="coin-vertical-fill";
export const id="dl_ac7f398fa54b4b66bfa7";
export const url=new URL("../icons/coin-vertical-fill.svg?v=e3dd5dbbc931038f8bd6ea946e98f7ea148555fc7bfd7b66df8a523031aa7835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
