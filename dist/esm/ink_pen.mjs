export const name="ink_pen";
export const id="dl_2af139b9dab84174b0db";
export const url=new URL("../icons/I/ink_pen.svg?v=8d0f6e1089d49f18a02b0634cc48d6eb3a916f119351721a86397d7634ae19b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
