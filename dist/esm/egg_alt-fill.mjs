export const name="egg_alt-fill";
export const id="dl_a378d6b82f9251a46901";
export const url=new URL("../icons/egg_alt-fill.svg?v=37b88a334f4e46775928d75ffabdd2b6a00f662907555af2b2626a27c89e0d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
