export const name="paragraph-light";
export const id="dl_8d41898305264a9a82bf";
export const url=new URL("../icons/paragraph-light.svg?v=10cda8b0d6b4eb2b7531ef29289d55531d4bb08df202b15ab88ce02559e34c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
