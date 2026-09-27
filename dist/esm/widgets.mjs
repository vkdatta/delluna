export const name="widgets";
export const id="dl_856387f2ecfce77f98eb";
export const url=new URL("../icons/widgets.svg?v=8448511cc2475a53ddb69673e7008830dfec64c9532099a07842030e53114894",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
