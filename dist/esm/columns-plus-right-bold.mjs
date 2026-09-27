export const name="columns-plus-right-bold";
export const id="dl_579d342121ab43b3a6c8";
export const url=new URL("../icons/columns-plus-right-bold.svg?v=a1dc600ec234da9a4cb2c01495b4c4a86ab72865fe3aceb3de345e4aebd35cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
