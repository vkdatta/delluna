export const name="reset_wrench-fill";
export const id="dl_1ccadc641ff52ba84c27";
export const url=new URL("../icons/reset_wrench-fill.svg?v=f95e73c69c89076d6059de5b436095ec4e4d29bb2066d2352c70a85f06f8ac07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
