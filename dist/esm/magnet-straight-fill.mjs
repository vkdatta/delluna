export const name="magnet-straight-fill";
export const id="dl_5de69d358d9f468c8315";
export const url=new URL("../icons/magnet-straight-fill.svg?v=3af42f8c2252084ff700d2ef58fc3ddae00ffb6824bf028d77848a78e38ed00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
