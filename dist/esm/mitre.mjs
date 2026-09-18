export const name="mitre";
export const id="dl_12ab5536ef684969bddf";
export const url=new URL("../icons/M/mitre.svg?v=bddd8e3145c77d77052b179d70610784803b75717bc1c82142cd076d773c83a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
