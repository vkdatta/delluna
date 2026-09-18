export const name="gif_box-fill";
export const id="dl_249a28555575491080e1";
export const url=new URL("../icons/G/gif_box-fill.svg?v=d6d01d5191c724d74b082f090d2c840f1bf9ed22c980748206178d241c5c5e95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
