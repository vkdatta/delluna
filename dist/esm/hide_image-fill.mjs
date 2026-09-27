export const name="hide_image-fill";
export const id="dl_49d938b68bc56d0298b5";
export const url=new URL("../icons/hide_image-fill.svg?v=3d54960244f50779fffa32835235fd5652208f36906cb60130b9205515594e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
