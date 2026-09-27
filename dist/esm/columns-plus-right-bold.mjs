export const name="columns-plus-right-bold";
export const id="dl_579d342121ab43b3a6c8";
export const url=new URL("../icons/columns-plus-right-bold.svg?v=be68dd35820767efac0384ed72ceba6909df7cdc4877e86f96b2292eebad9fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
