export const name="pizza";
export const id="dl_280225cba48b4847b32b";
export const url=new URL("../icons/pizza.svg?v=275df201ec959ce5ebb748075b24d5cdbd233e7464cd8fdd89dbf4dfd2fa0bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
