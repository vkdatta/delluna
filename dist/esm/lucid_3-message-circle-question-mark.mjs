export const name="lucid_3-message-circle-question-mark";
export const id="dl_76569506bec64ab7960f";
export const url=new URL("../icons/lucid_3-message-circle-question-mark.svg?v=c79af99dd6bea08d455d81ba73b0e1ef1bd4252b8befaac3b05a5940fdf00b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
