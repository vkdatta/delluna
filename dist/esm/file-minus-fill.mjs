export const name="file-minus-fill";
export const id="dl_6e31e906f2b448969d33";
export const url=new URL("../icons/file-minus-fill.svg?v=1bf1bc857f399e3b57feae0b1152eaeb737ba580e7c61673450d868f86a48489",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
