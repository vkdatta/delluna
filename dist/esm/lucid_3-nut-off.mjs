export const name="lucid_3-nut-off";
export const id="dl_266298d274824d8885ca";
export const url=new URL("../icons/lucid_3-nut-off.svg?v=44233024c3c1056cfb959e06e76d4c1cb34a55001f939c668d06f5a1d52e0463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
