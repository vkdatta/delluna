export const name="bird-bold";
export const id="dl_112d7974afe445a69fe0";
export const url=new URL("../icons/bird-bold.svg?v=532d2b521d6eaf089fcb643bb2200bb694f9da40bb556a54ba5a67f9ca866cb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
