export const name="text-h-one";
export const id="dl_2d5890e2c3e3f38c23e9";
export const url=new URL("../icons/text-h-one.svg?v=6a29142bd9df0358807267f2e4387771649c5e17b3c239aeefa242f1bec84fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
