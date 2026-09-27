export const name="patreon-logo-light";
export const id="dl_d9b653e2aaa948bf9b56";
export const url=new URL("../icons/patreon-logo-light.svg?v=2c972a447c8f1d26bf26ed1c16f2dd33266c0b7734cf34a2a5e8b9242186c2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
