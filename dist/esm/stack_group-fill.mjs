export const name="stack_group-fill";
export const id="dl_e765e351369bb58a3a1c";
export const url=new URL("../icons/stack_group-fill.svg?v=2c7cb87fd86943adafbea9868088fbdd24b452f2a590724fdc8244d9390d271e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
