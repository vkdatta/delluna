export const name="tv_signin";
export const id="dl_fc23e34cba2d49c8ae10";
export const url=new URL("../icons/tv_signin.svg?v=9c76a9a331f253835fafd53f1e8fbdb05bd60ac9f074ad631da41d1c2f717a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
