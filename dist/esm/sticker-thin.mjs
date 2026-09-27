export const name="sticker-thin";
export const id="dl_72a6ed88c70badd98a43";
export const url=new URL("../icons/sticker-thin.svg?v=fecdec1e4528ec732f762513a28ea94587543636c2052a4a415b56ef678dcf6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
