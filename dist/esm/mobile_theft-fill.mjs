export const name="mobile_theft-fill";
export const id="dl_6a9abdf672fa47cb9a00";
export const url=new URL("../icons/mobile_theft-fill.svg?v=78d4e3b17aff01ec87f2f85c83f1bd17f110f63f2f9d4572f8fba253e625657a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
