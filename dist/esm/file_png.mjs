export const name="file_png";
export const id="dl_9b303e7b024619f2c351";
export const url=new URL("../icons/file_png.svg?v=3fe32eaa451da2c839602d0acb228c8bac048b0fdd331d972b150718d60ce094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
