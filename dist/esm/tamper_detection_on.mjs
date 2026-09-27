export const name="tamper_detection_on";
export const id="dl_a5123d1d7302b0df6d34";
export const url=new URL("../icons/tamper_detection_on.svg?v=84c5f5cd70d52c76d0a2b81660cedd80b91475609b4d86c311e98babbb8e23c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
