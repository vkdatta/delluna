export const name="bowl-food-duotone";
export const id="dl_35cca0fc4ef9485eb6dc";
export const url=new URL("../icons/bowl-food-duotone.svg?v=696242e97ca5d6e1f79797cd423210cf889979cdcd59c5e3373e7c05accb4b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
