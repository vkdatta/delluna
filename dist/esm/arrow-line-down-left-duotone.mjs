export const name="arrow-line-down-left-duotone";
export const id="dl_5be3c216771f48fdbcc6";
export const url=new URL("../icons/arrow-line-down-left-duotone.svg?v=b1686f8ca5b814b73466b393b3a867e55b5b8a324a4bf29a709f1d1d0cf21b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
