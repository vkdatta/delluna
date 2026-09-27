export const name="spinner-gap-light";
export const id="dl_29e8743eddb71034df19";
export const url=new URL("../icons/spinner-gap-light.svg?v=72555c061eed3cc7b1b55c4634b1ff72755beae3b21d24d4ef56443517bce646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
