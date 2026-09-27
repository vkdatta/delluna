export const name="demography";
export const id="dl_bb6ef0a2ec8fa5426d3f";
export const url=new URL("../icons/demography.svg?v=b1a3c3cb19bd479c65f1a45252317324f8865accd8d60451daf827335710fe98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
