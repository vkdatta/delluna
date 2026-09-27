export const name="integration_instructions";
export const id="dl_25a3365ce2922cd7f643";
export const url=new URL("../icons/integration_instructions.svg?v=1405dd5f7950f54fc5fa7ff1912e13437ec65afbe4aeb2cf65f24fcfa983f937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
