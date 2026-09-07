export const name="paperclip-thin";
export const id="dl_588623c840dd4ab98d8c";
export const url=new URL("../icons/paperclip-thin.svg?v=2393aade00b844e8e0dd069bfb3d0f63b752bcebf57c053bfbd608a6e0b73660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
