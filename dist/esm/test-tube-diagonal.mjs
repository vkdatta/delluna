export const name="test-tube-diagonal";
export const id="dl_8321ee3045764f8096f8";
export const url=new URL("../icons/test-tube-diagonal.svg?v=3b0682e62fb27acceb4de4b0dcdb0a3845f1074ff7d3cb95c53e1ac7928a348a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
