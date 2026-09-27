export const name="phone-x";
export const id="dl_96e249c6044a4df2b07f";
export const url=new URL("../icons/phone-x.svg?v=9d2a7b35a60acfff56f5a6411470234ca44e26c1761fa4fcc104fd3a2239a651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
