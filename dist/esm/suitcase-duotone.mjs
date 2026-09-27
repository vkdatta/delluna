export const name="suitcase-duotone";
export const id="dl_c0d88105aa850c2af346";
export const url=new URL("../icons/suitcase-duotone.svg?v=54695f4eb4181e60d6b9bba70939f637d841bab0900965c909d9b57612fb0563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
