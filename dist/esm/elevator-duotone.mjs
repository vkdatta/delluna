export const name="elevator-duotone";
export const id="dl_91f36e9bb9ee455db642";
export const url=new URL("../icons/elevator-duotone.svg?v=a087c4d82d1b73b0ec295286c107024769b8b35be8ae8c76b095f2e7a71cd177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
