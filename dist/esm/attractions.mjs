export const name="attractions";
export const id="dl_4e606fc88e4dd5644b8a";
export const url=new URL("../icons/attractions.svg?v=082c8d461fe26ba286f1ebf8b1b54ca3e49c832b77f27bf9a07eede3b633cc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
