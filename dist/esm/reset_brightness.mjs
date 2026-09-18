export const name="reset_brightness";
export const id="dl_00c305956be44e01943e";
export const url=new URL("../icons/reset_brightness.svg?v=fb429a098471cf4a998823f6e31759c300a2b65db21f6d13cb5f10743685fe24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
