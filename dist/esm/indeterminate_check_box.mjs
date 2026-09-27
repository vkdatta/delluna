export const name="indeterminate_check_box";
export const id="dl_f5f55bf9ca819cf31f38";
export const url=new URL("../icons/indeterminate_check_box.svg?v=e4205dd14f27020bc7916373e48256d625ed1507c3784dab27fe427b44c1c365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
