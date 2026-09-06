export const name="eyedropper";
export const id="dl_daedf63268f04fe29ce5";
export const url=new URL("../icons/eyedropper.svg?v=87cad5a974a6f152cc7dce67fd6c41fdc21f75d59bed20508b68c95f65d9ebc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
