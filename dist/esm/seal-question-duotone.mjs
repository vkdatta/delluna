export const name="seal-question-duotone";
export const id="dl_ef309147e4dc4e319283";
export const url=new URL("../icons/S/seal-question-duotone.svg?v=6f947b8f97524f3b1f4cf969b9ff1ba7bc798a32b8c194fd673d210be0c13ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
