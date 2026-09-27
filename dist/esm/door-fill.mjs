export const name="door-fill";
export const id="dl_0d1a5d6a0a164693823e";
export const url=new URL("../icons/door-fill.svg?v=53bf4139aef7c79cb8ee72daae354e28e701536cf6b590f009e6fb7904cc6ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
