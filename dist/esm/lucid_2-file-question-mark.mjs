export const name="lucid_2-file-question-mark";
export const id="dl_e02e9b9c99034eb2ab9f";
export const url=new URL("../icons/lucid_2-file-question-mark.svg?v=df9d997937facb111e5f54f3ace3db87da93ec000456efdb843f1869f13735b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
