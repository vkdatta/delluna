export const name="arrow-bend-up-right";
export const id="dl_daf69dc717f14490ab2e";
export const url=new URL("../icons/arrow-bend-up-right.svg?v=a3436a4cee4f7161bcc2bd1a99a62239cb7bc8db957fc1e03ae66c889ec755cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
