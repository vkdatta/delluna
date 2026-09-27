export const name="crop-light";
export const id="dl_e7fcf729f94243f18485";
export const url=new URL("../icons/crop-light.svg?v=15fa69193146104bbdc146205e7bff137b496147bec0bee1d424f2528a797bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
