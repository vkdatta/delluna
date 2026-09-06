export const name="arrow-u-down-right-fill";
export const id="dl_ea54f96907f645759758";
export const url=new URL("../icons/arrow-u-down-right-fill.svg?v=02c5861f5f6358fd037f44914c71985f8e7fc35628cd602ec58d513f2f3ff580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
