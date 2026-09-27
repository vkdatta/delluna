export const name="comedy_mask";
export const id="dl_cd00db8f42341ac5f48e";
export const url=new URL("../icons/comedy_mask.svg?v=8e6b53cd8641df173d5eb1ccbf9e6dc726539a0ef9de13e7f6c2dbf342d14ad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
