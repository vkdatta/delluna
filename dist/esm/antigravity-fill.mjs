export const name="antigravity-fill";
export const id="dl_f531623b6972fe7ed2c9";
export const url=new URL("../icons/antigravity-fill.svg?v=75b6fd1abb026e5fb6b361ad431f87d3a33e384d73edb6e346475111480da484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
