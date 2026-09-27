export const name="10mp-fill";
export const id="dl_6d168be0594621edcc16";
export const url=new URL("../icons/10mp-fill.svg?v=c3b3bc8cb2d98ffc8d98cf75bde6f6d1c73d8472d0c36f098a49287a61149aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
