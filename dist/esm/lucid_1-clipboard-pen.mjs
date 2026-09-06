export const name="lucid_1-clipboard-pen";
export const id="dl_ef23a269338d47d19922";
export const url=new URL("../icons/lucid_1-clipboard-pen.svg?v=a77589b297b5446a1059aa7780d4d34cf104b6824720583833751585d444c66b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
