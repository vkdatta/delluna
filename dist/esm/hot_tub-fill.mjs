export const name="hot_tub-fill";
export const id="dl_03174b76d7561d587289";
export const url=new URL("../icons/hot_tub-fill.svg?v=25dc0dcd9ba0012b905a684d28da880d0fd12e85cb8309b0bb1af1b79d9d3474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
