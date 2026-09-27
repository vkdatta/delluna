export const name="lucid_2-fingerprint-pattern";
export const id="dl_03d43c10da864f87a9a8";
export const url=new URL("../icons/lucid_2-fingerprint-pattern.svg?v=8c26a8cde467426a3fbead32683dd3fd901f8bc876785148f1563d1cda4ea9aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
