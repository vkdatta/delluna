export const name="rows-plus-bottom-fill";
export const id="dl_5f5122880d1e4d619ed3";
export const url=new URL("../icons/rows-plus-bottom-fill.svg?v=766e67eafa524d18c7f95c2272180423da889d4b3b025def788f45c651da9fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
