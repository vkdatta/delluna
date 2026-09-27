export const name="lda";
export const id="dl_1c96e6e4c12095a18273";
export const url=new URL("../icons/lda.svg?v=aba9fae3959c1b70aeeee0d1a2b3950ef2d3c429d48bdbd737bd830116636b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
