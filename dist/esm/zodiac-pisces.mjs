export const name="zodiac-pisces";
export const id="dl_ef15a704c0404ead857a";
export const url=new URL("../icons/zodiac-pisces.svg?v=2a80e6f34bebcf2917b6a657aa11ca79f047bd161b177fc5de8d27dbad38c5a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
