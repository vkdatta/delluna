export const name="selection-all-duotone";
export const id="dl_707c022345e9bf4a4adf";
export const url=new URL("../icons/selection-all-duotone.svg?v=97dc62335ccb67a6eb412fb8770a2069b43c1a69e6ee5c798c7e8197665b10a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
