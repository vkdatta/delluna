export const name="synagogue-thin";
export const id="dl_84f4689f86f88cb05b8a";
export const url=new URL("../icons/synagogue-thin.svg?v=b73213332ac8202ede1c20ccc7e763bd7cf9000398040ba4533f46283ea6477c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
