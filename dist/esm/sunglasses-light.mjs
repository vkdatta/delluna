export const name="sunglasses-light";
export const id="dl_a655513479ec1b266667";
export const url=new URL("../icons/sunglasses-light.svg?v=5a769acfe6f9eed105e7f838a5ba119485c29a4e611f30d615b0c39cd1869b17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
