export const name="prescriptions";
export const id="dl_983bdfb5dc08162688fb";
export const url=new URL("../icons/prescriptions.svg?v=f26c7881ac63562d345c10f98f159bc278b35e9e0ac9412581814ca151b9e691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
