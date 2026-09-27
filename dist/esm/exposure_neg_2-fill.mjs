export const name="exposure_neg_2-fill";
export const id="dl_2cc06301adbd4f88545a";
export const url=new URL("../icons/exposure_neg_2-fill.svg?v=3639553b8bd930e79b83bd23c6954bef8d8d7313f1bce513602b91f3c55bb68e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
