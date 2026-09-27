export const name="test-tube-duotone";
export const id="dl_ebead79543986e1caa2f";
export const url=new URL("../icons/test-tube-duotone.svg?v=9156677b0318dd2fddcd0a24224684033d087c1e1cb52501013ead4b2e6248ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
