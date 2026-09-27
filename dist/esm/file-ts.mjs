export const name="file-ts";
export const id="dl_7831bfae50d4402fb9a9";
export const url=new URL("../icons/file-ts.svg?v=efd9735a72fc55aa95bf0513085b83de19f4b19428bf9d51811610a9e020287c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
