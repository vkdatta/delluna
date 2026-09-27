export const name="t-shirt-duotone";
export const id="dl_2920cf4b6963e3df2228";
export const url=new URL("../icons/t-shirt-duotone.svg?v=6245dae8e687ffc5fdb794888a145c7b690f1d43659892d78437fef753299003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
