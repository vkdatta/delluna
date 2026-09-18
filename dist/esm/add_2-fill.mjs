export const name="add_2-fill";
export const id="dl_7e9807f2375645e586ee";
export const url=new URL("../icons/add_2-fill.svg?v=04cf0eba4961a10e2bf4a7b642433636b851d069d0c51e42d8eadad8bb96c83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
