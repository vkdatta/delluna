export const name="arrow-up-left-light";
export const id="dl_8a9eaaa80f454e5aa75c";
export const url=new URL("../icons/arrow-up-left-light.svg?v=0f0408a52db6d67c2e19744ea7ff867f8b906986b873cd75fa98100c4a33f7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
