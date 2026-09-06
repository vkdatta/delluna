export const name="lucid_2-database-zap";
export const id="dl_ff944eb99d1e4efca2c6";
export const url=new URL("../icons/lucid_2-database-zap.svg?v=797db95581ce854ab5e69b47a171376064b4773f54bd0ebf50af4261995b832e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
