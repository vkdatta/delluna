export const name="rocket-duotone";
export const id="dl_371b8c97adf645f7a296";
export const url=new URL("../icons/rocket-duotone.svg?v=d61f27b32fb1c5adf170f72613d6278b4204c07d52d0ae02f8cdad656b054b2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
