export const name="log-bold";
export const id="dl_845d1eb702714e32ab8f";
export const url=new URL("../icons/log-bold.svg?v=f199d8b492fea257472c0f9ca9827c3cfd9c6442de9902f8e7f836e5d4968321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
