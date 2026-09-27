export const name="text-h-three-duotone";
export const id="dl_8ebe59b865fb1325c738";
export const url=new URL("../icons/text-h-three-duotone.svg?v=a98124881cc25dee6186abd964e99868430529adf8a7061c06138207c380e486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
