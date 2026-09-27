export const name="path-light";
export const id="dl_79730ca9df234178b887";
export const url=new URL("../icons/path-light.svg?v=2ce656372b6ccaf5f89eadd6cff307d5a76cd806bbb4302373e27555f9459e42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
