export const name="number-circle-three-fill";
export const id="dl_65cce9bfcfdb41638f6b";
export const url=new URL("../icons/number-circle-three-fill.svg?v=e53324f01d22767bb7cf052fd3393ebf091dbe55be5e55db247fdde239a26b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
