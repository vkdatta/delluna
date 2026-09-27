export const name="dribbble-logo-bold";
export const id="dl_d7989dbd8d764172b164";
export const url=new URL("../icons/dribbble-logo-bold.svg?v=9abcf26aa190e5918230cbac2031d524d5acb5d9512c6b43ad49e6d7e42929f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
