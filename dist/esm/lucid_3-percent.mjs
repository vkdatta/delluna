export const name="lucid_3-percent";
export const id="dl_4904ed2b7ee04480851e";
export const url=new URL("../icons/lucid_3-percent.svg?v=df3be2745c26a076d404c630d2845b0609ec9b47d86637b66386d8d8cd831170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
