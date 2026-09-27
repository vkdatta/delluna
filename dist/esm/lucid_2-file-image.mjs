export const name="lucid_2-file-image";
export const id="dl_b9e00dd4887147c3a595";
export const url=new URL("../icons/lucid_2-file-image.svg?v=97a01801be8687065188e58cae117d4e398b36b99ab22dcd18c97a51d615b43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
