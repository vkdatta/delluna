export const name="file-pdf-light";
export const id="dl_a09ff3d6dc9f4dd0acd9";
export const url=new URL("../icons/file-pdf-light.svg?v=ce87eed125751c234455fbb8be925d971b499ce4e464a165137576f027ead7b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
