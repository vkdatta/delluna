export const name="file-pdf-light";
export const id="dl_a09ff3d6dc9f4dd0acd9";
export const url=new URL("../icons/file-pdf-light.svg?v=cada04e60a7ffac861c9898add964cb4c29e11163de71e0d493673d4b857313e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
