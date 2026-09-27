export const name="siren_question-fill";
export const id="dl_769273b11fae7aa6025a";
export const url=new URL("../icons/siren_question-fill.svg?v=96d1ad6f9c4b12c15e1db4ab0942d9366cbdd386ed316bfa5770e61adc02ddc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
