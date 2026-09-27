export const name="add_diamond";
export const id="dl_00fe2b4b982a090f066f";
export const url=new URL("../icons/add_diamond.svg?v=459bbe3c4bcb15690490c92b7208ddd7c833c98008bcb7beddde1dd9315d8c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
