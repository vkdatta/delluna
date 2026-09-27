export const name="quiz-fill";
export const id="dl_fea1c2b459f0b3c81b79";
export const url=new URL("../icons/quiz-fill.svg?v=b2a0f412a2a66de9ed13fb83c1a9ae7a599b06d70104c57ee94094df5961411d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
