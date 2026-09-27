export const name="gpp_bad-fill";
export const id="dl_f2a2455a8bd768944d29";
export const url=new URL("../icons/gpp_bad-fill.svg?v=4fef91357c4b5894e4a8d87d723fe0d2bce38fda4ebcf431d1f70175139ce386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
