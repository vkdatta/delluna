export const name="magic-wand-duotone";
export const id="dl_146c05e2923f4521b65c";
export const url=new URL("../icons/magic-wand-duotone.svg?v=abb6aefe41e52b90961166c4691f6b5d463193719cba1b0a5cfc35314787e589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
