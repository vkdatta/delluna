export const name="atm";
export const id="dl_e11240784e5d1cbe9d2d";
export const url=new URL("../icons/atm.svg?v=c4c0a7ded3ef16d6e5f5869a7babc14e8e7f227cb9b4a68c3ae1ea4ff1d472cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
