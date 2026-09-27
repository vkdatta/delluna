export const name="pix-logo-bold";
export const id="dl_83d39b4343c044089206";
export const url=new URL("../icons/pix-logo-bold.svg?v=157361f09f229f5aded54800a0a52fa81670c4f6fa3d9dd2a5d9a6e49c226680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
