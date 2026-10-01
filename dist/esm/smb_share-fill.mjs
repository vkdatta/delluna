export const name="smb_share-fill";
export const id="dl_7bafbdf00cfa1d3a6e63";
export const url=new URL("../icons/smb_share-fill.svg?v=45d66051d47c3cb7bb554933cf71fb6067f8dfeb900c3a3ce5021faf20f6ee47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
