export const name="gender-intersex";
export const id="dl_ddd43640cbf644bfa3f2";
export const url=new URL("../icons/gender-intersex.svg?v=753ad1630f0d4861b07ffac99762f54ee583ab2f98deab3a5de1292c55dbe172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
