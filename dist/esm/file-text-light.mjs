export const name="file-text-light";
export const id="dl_17df532335814b8ba2bc";
export const url=new URL("../icons/file-text-light.svg?v=c471066f9508fd727a4b1ee4ec78c39ffcfba4c652ba81b0ffc8bd8addae7f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
