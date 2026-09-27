export const name="cooking-pot-thin";
export const id="dl_8325a6b01d344d1d836f";
export const url=new URL("../icons/cooking-pot-thin.svg?v=5d8af0795a7a515ba4b001be984ba4b539ded7c98d7a305e4728e893d5c1d18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
