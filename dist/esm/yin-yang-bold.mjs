export const name="yin-yang-bold";
export const id="dl_a78930503b37727a782f";
export const url=new URL("../icons/yin-yang-bold.svg?v=1c44a298c9d012f2b8c349cb6174cadca0788570d5c3bd59b6c754b5a8d0e5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
