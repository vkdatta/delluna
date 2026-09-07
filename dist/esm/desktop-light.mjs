export const name="desktop-light";
export const id="dl_c4053667c92c45c8aad1";
export const url=new URL("../icons/desktop-light.svg?v=3763419a03d6cec7d1c926c575e2e3e593fcdf273446e7bc040f14a8d7b2f29f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
