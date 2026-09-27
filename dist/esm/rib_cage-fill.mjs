export const name="rib_cage-fill";
export const id="dl_69f433b4ba4d69b5d19b";
export const url=new URL("../icons/rib_cage-fill.svg?v=00a05bd07fb4d39686a443ac954fa9888c3ba95d38f2e1d68253622d5026421d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
