export const name="train-simple";
export const id="dl_320b2b0dde264e0296e0";
export const url=new URL("../icons/T/train-simple.svg?v=755faebded84c00198a9c19245ea32a7155d20f5ef7b4396b7b16fab042a8d2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
