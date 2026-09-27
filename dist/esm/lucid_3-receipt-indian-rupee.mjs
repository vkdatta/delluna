export const name="lucid_3-receipt-indian-rupee";
export const id="dl_d6803d5dc8cb48ab8a88";
export const url=new URL("../icons/lucid_3-receipt-indian-rupee.svg?v=53a454217480d0547b72c2a40c6f4962fe09b1ca9f4fdec4c65e108207c0e3d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
