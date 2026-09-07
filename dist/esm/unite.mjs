export const name="unite";
export const id="dl_831bb40d1c764dc99cae";
export const url=new URL("../icons/U/unite.svg?v=1f031f08f73a2dc97710c21c06ba4914a688bd37fc2e1631e7b534c1b1e591fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
