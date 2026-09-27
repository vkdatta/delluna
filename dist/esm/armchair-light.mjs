export const name="armchair-light";
export const id="dl_3c8d12dd7df6459984fc";
export const url=new URL("../icons/armchair-light.svg?v=aa20048a99740c88e95603ff6fc947e423bce9179b65fe78c2c3ae9bbb19fca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
