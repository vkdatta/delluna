export const name="lucid_1-book-minus";
export const id="dl_d2f6d0dd91cf4af8a445";
export const url=new URL("../icons/lucid_1-book-minus.svg?v=6dd42c204d814a55325bacb72972f25b03123de7ee64dfeb22e608b12eacda5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
