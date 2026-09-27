export const name="lucid_3-shield-ban";
export const id="dl_185d954e3cd546af8803";
export const url=new URL("../icons/lucid_3-shield-ban.svg?v=03d30644719b96c6e0990d70190ea65ef4c29d1a3565fc6071b6b0071e6a7028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
