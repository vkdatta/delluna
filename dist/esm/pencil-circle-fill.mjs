export const name="pencil-circle-fill";
export const id="dl_43743dae8f284bfb9cf7";
export const url=new URL("../icons/pencil-circle-fill.svg?v=29df02ff6b1bb2a744b89bf0345504e62bf6d1d2bc5aba79a91de8d15e59b44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
