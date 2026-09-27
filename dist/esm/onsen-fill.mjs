export const name="onsen-fill";
export const id="dl_801357f24e159736172f";
export const url=new URL("../icons/onsen-fill.svg?v=ebd6b6f4e89f9fefeaedb7ba08f0a382bfaa522bcf7c5e5e756be46460e799d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
