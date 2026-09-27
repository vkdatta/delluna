export const name="poker_chip-fill";
export const id="dl_e8a938dcc3bb7afd1795";
export const url=new URL("../icons/poker_chip-fill.svg?v=8dd06bc9352a9678d703fc034e6d67b29a02e09e8c7b48082426a12e3a87d62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
