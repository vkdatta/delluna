export const name="bia";
export const id="dl_a88f2cbacd29c5738a7f";
export const url=new URL("../icons/bia.svg?v=a5d2b47e7cff4b84b4bfe2a4647a0df27fff3c24b3038af4b78e41700184d379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
