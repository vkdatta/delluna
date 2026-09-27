export const name="science";
export const id="dl_28a46bedecbbe7241f73";
export const url=new URL("../icons/science.svg?v=68a8fecdf0a29545e772b38cda3224335f41c4cbaf334e01d4ea40a293388aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
