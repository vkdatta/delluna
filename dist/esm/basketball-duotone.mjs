export const name="basketball-duotone";
export const id="dl_12a13cb8341848988023";
export const url=new URL("../icons/basketball-duotone.svg?v=9407645c13aa15f9c4593af18899f2c3c12b95af29a0b385b773576b8fe84c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
