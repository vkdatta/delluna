export const name="account_box";
export const id="dl_76bc49358a168b64cbbc";
export const url=new URL("../icons/account_box.svg?v=0408d2dccf6bd22b6c1f857be9cfb94628e6e396792f29fa13b255e44779672f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
