export const name="local_see-fill";
export const id="dl_115d5afb6581c9be40d9";
export const url=new URL("../icons/local_see-fill.svg?v=b145175bf29cc41662d5eb883d005e2073ce877d82eacecec95daea7af52603e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
