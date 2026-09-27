export const name="hash-fill";
export const id="dl_4adda1a91d5f4e75b29e";
export const url=new URL("../icons/hash-fill.svg?v=831ebfc1b40d20e88ce043688628a6ad66c8b13d1e4dcd99157a523443634446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
