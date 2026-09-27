export const name="circle-notch-duotone";
export const id="dl_5f02ab201b3444559c21";
export const url=new URL("../icons/circle-notch-duotone.svg?v=dbe9503fb2167f15c8c3202f6abb20a24ad1edcff1d9d9e972f1730a0fac9b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
