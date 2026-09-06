export const name="caret-double-down-thin";
export const id="dl_5dbed5c2c44e453c8e9e";
export const url=new URL("../icons/caret-double-down-thin.svg?v=41dd1babdcd64107927482cc618f7b0069a52680e1f7f992566fdc14ddfe6c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
