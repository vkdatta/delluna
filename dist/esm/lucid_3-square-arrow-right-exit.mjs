export const name="lucid_3-square-arrow-right-exit";
export const id="dl_61475b87842d4c158776";
export const url=new URL("../icons/lucid_3-square-arrow-right-exit.svg?v=422184a1980999de017eccb7536d49807538e60be2051024be776883824017df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
