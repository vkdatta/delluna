export const name="lucid_1-circle-check";
export const id="dl_2b215fc0f3404fa09fd5";
export const url=new URL("../icons/lucid_1-circle-check.svg?v=0293a2698c32982ebc2ec1fd5bc988e71c6c0f52df2b5ec666d5be572bf49fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
