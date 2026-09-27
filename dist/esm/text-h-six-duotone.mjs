export const name="text-h-six-duotone";
export const id="dl_8181239ac34e58c8b2b1";
export const url=new URL("../icons/text-h-six-duotone.svg?v=798fafa6284cf8d9f8c2919e7dd6e5d039c600c343907f2efbe867d2f6dec43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
