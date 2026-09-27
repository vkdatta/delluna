export const name="magic-wand-bold";
export const id="dl_c4fa2fec5395491588b6";
export const url=new URL("../icons/magic-wand-bold.svg?v=cea55fdde575d9ae17c9341e5300d2bb9e0c1667a6233e0129c8e4942ed63b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
