export const name="skip-forward-duotone";
export const id="dl_7b4c5025dd1168aced21";
export const url=new URL("../icons/skip-forward-duotone.svg?v=749805f06de58afedf583e2ea8a4f73f9e408fd285a42404cf5b3f6cf7b8f545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
