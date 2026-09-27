export const name="magnet-straight-fill";
export const id="dl_5de69d358d9f468c8315";
export const url=new URL("../icons/magnet-straight-fill.svg?v=564fb256106fed18aa70e16518a400f38c999ee8dd24f4e2fc1357383b6ebab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
