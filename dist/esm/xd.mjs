export const name="xd";
export const id="dl_3b48e044ba2f39aa6dd6";
export const url=new URL("../icons/xd.svg?v=80c77b6a4626f07fd0b4fc0dd046a0b0e731b705c1ba46404ee68149f7154af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
