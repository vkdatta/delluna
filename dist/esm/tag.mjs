export const name="tag";
export const id="dl_22c5d43ef23249698bd2";
export const url=new URL("../icons/tag.svg?v=26453345a0f43deb02332a15c85641e6de567eb177637df9304e9d386040026d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
