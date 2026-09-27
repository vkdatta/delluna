export const name="codepen-logo-duotone";
export const id="dl_d0bed11583b04a6498a2";
export const url=new URL("../icons/codepen-logo-duotone.svg?v=a7dae62a50dec7c3c09417bc4b9ab2b82f56ccedac116d9073d09cba5d7efeba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
