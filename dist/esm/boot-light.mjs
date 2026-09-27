export const name="boot-light";
export const id="dl_f06a486e4e604d8ab73f";
export const url=new URL("../icons/boot-light.svg?v=678b865bfc480879eff6688a4b275293077cc3f8fcc972f3c3434038fe1a78ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
