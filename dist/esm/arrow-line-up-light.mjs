export const name="arrow-line-up-light";
export const id="dl_9244d31613dd42f19b00";
export const url=new URL("../icons/arrow-line-up-light.svg?v=6dfc0d9e07f4a15c5679f2308bf8f56dd2a4f1ba177eeffdc5ab0dddf2382892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
