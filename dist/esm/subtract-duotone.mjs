export const name="subtract-duotone";
export const id="dl_c7e25016bea9474294dd";
export const url=new URL("../icons/S/subtract-duotone.svg?v=e19d7d6222e49b91c97157e47487c683b228421b41fef827a9102a1e643fdcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
