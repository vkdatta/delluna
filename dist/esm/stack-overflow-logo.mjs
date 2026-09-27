export const name="stack-overflow-logo";
export const id="dl_66395ecce6f3e0394d10";
export const url=new URL("../icons/stack-overflow-logo.svg?v=1da5928f5712c0d512abc74a3646f1402eb0f34d179adf3ee58640139b857ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
