export const name="turkish-lira";
export const id="dl_d2e1c79698d44856be5c";
export const url=new URL("../icons/turkish-lira.svg?v=3cb88a458ff8b8b021c0ed44e9ebf74ae32a0e40ea11ac3a748816adeba1bc62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
