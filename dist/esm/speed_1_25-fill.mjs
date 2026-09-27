export const name="speed_1_25-fill";
export const id="dl_77270452db9eee80d6e6";
export const url=new URL("../icons/speed_1_25-fill.svg?v=64db99bfd6e5b28c5746289669f7d5b8808a0b798eff0d5ab57a4eb6c0677526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
