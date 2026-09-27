export const name="gender-intersex-light";
export const id="dl_d9327b07f2af416db57e";
export const url=new URL("../icons/gender-intersex-light.svg?v=e0718283579b34fb0036e88d77e976c4d64277fce87e5ec50b91527ccd5ab9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
