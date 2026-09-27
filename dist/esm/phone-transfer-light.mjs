export const name="phone-transfer-light";
export const id="dl_6cf28fd0137a4174b8be";
export const url=new URL("../icons/phone-transfer-light.svg?v=f5d756afd6e13c9c13fbac4add0e5c5841a6f9d7b53e771d6b69ff13bf59ea7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
