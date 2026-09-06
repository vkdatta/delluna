export const name="link-break";
export const id="dl_d16bbc1650a0433b9902";
export const url=new URL("../icons/link-break.svg?v=54ac64cf997d33c5db295bd389c8a5679d0aff8c7d25df9178ff185da482d68e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
