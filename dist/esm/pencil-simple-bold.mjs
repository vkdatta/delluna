export const name="pencil-simple-bold";
export const id="dl_e4fb47f199d34553ab24";
export const url=new URL("../icons/pencil-simple-bold.svg?v=734676cb91159fe6b8a8350d40c48f3d028c3c5a415c11f80ce2c6954cae3f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
