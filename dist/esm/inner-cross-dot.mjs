export const name="inner-cross-dot";
export const id="dl_f54155583a8a65122eb9";
export const url=new URL("../icons/inner-cross-dot.svg?v=e6fef44c2d08ef41f8b5685376945688141ee41a0fe60ed5f8a98f2e33caa9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
