export const name="mobile_block";
export const id="dl_1a5a71e352c6d8f96019";
export const url=new URL("../icons/mobile_block.svg?v=930168f7ea315519963f5213002e9126245b1b45fc3a8c71f5f7a8b8621b47be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
