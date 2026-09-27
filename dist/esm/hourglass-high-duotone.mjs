export const name="hourglass-high-duotone";
export const id="dl_780cac8bfc0248308c7c";
export const url=new URL("../icons/hourglass-high-duotone.svg?v=42e2662ad96c7054c188de166b0f0f7227cc6e8b0da9699bfbb6ca64eb412753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
