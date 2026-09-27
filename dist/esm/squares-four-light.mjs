export const name="squares-four-light";
export const id="dl_d7760d038cb091ee2836";
export const url=new URL("../icons/squares-four-light.svg?v=0857b2afabaa7f115900cc120fe06559236af270aa3da6515cbaa7f7a526c18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
