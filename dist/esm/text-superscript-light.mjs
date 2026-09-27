export const name="text-superscript-light";
export const id="dl_652c51d71923a686bf16";
export const url=new URL("../icons/text-superscript-light.svg?v=29f15eafaeca7fbe7585096bb2fdb0c9d49cf84d5aa5ba34bcabd703282f9d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
