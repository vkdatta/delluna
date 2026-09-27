export const name="cake";
export const id="dl_ed5f381d91d7431f9a50";
export const url=new URL("../icons/cake.svg?v=69a15e44a0cf4779ccf4796264861613ecc7b7bb72e78bf38598ae3a00f78c8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
