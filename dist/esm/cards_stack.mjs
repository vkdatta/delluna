export const name="cards_stack";
export const id="dl_ff7eb4292d6866516664";
export const url=new URL("../icons/cards_stack.svg?v=f81551ba3ed93279c8a38dfd464f98026bd9ad51aa717384cbcc4ea93994d150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
