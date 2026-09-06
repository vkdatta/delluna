export const name="golf-duotone";
export const id="dl_d1c0a8daa7bd480cafad";
export const url=new URL("../icons/golf-duotone.svg?v=f981df8ca9bfd546e34d7fdadcc13b81dc1533dddd365f60a9836448d01b78fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
